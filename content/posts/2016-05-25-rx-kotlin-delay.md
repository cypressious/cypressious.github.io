---
title: "RxJava & Kotlin: Conditionally delaying the first item in a stream"
description: "Using a Kotlin Extension Function to solve an RxJava problem"
date: 2016-05-25
---

In my application, I recently had the following requirement: In a reactive stream of items, wait until one specific item is emitted, then emit all items to the observer. If that item isn’t found, don’t emit anything and terminate with an error.

Now, RxJava has a number of useful operators like `buffer` or `delaySubscription` but they weren’t exactly doing the right thing. So I came up with a solution I want to share.

## The code

Here’s the implementation, wrapped in an extension function:

```kotlin
fun <T> Observable<T>.delayUntil(value: T): Observable<T> {
    val replaySubject = ReplaySubject.create<T>()

    val sharedObservable = this.publish().autoConnect(2)
    sharedObservable.subscribe(replaySubject)

    val delayObservable = sharedObservable
            .first { it == value }
            .concatWith(Observable.error(IllegalArgumentException()))

    return replaySubject.delaySubscription(delayObservable)
}
```

Let’s analyze what it’s doing:

Because the items in the stream aren’t delivered immediately at first, we buffer them in a `ReplaySubject`. As a reminder, a `Subject` is both, an `Observer` and an `Observable`. We make use of this by subscribing it directly to our item source in line 5. Once an observer subscribes to the `ReplaySubject`, it will emit all previous and future items to it.

We will need to subscribe to the source observable twice, first to feed the items into the `replaySubject` and second to check for the expected item. Because the source observable is potentially [_cold_](https://www.javacodegeeks.com/2015/03/hot-and-cold-rx-java-observable.html), we don’t want to subscribe to it twice directly. Instead, we use the `publish` operator which will deliver the results from a single stream to all subscribers in combination with the `autoConnect` operator that makes the observable actually subscribe to the source once two observers are subscribed.

Next, in lines 7–9, we setup the `delayObservable` that either emits the first occurence of the expected item in the source stream or terminates with an error. Note, that even if it finds the item, it will still terminate with an error, however that is perfectly fine for our needs.

This return value of the method is the subject itself with the `delaySubscription` operator applied to it. This operator expects an observable parameter and waits until it emits any item or completes without emitting before it subscribes to the original observable. This is exactly, what the `delayObservable` is used for. In our case, if no item is emited, the error is propagated instead.

## Examples

Let’s look at what the result looks like. We use a Semaphore so that our little test programs doesn’t instantly terminate. We create a source that emits 10 sequential numbers every 200 milliseconds. We delay it until we find a 3 and subscribe to it by printing the results with a timestamp.

```kotlin
val mutex = Semaphore(0)
val source = Observable.interval(200, TimeUnit.MILLISECONDS).take(10)
val delayed =  source.delayUntil(3L)

println("${System.currentTimeMillis()}: start")
delayed.subscribe(
        { println("${System.currentTimeMillis()}: $it") },
        { println("Failed with $it") },
        { mutex.release() }
)

mutex.acquire()
```

And here’s the output:

```
1464210578099: start
1464210578909: 0
1464210578909: 1
1464210578909: 2
1464210578909: 3
1464210579106: 4
1464210579306: 5
1464210579506: 6
1464210579706: 7
1464210579906: 8
1464210580106: 9
```

We can see that items 0 through 3 are buffered and then emitted all at once. After that, the remaining items are emitted immediately, just like we wanted to.

## Making the observable reusable

Now what happens if we subscribe to the same delayed observable a second time? The answer is: nothing, it won’t even complete. The problem has to do with how `ConnectableObservables` work, but I will spare you the details.

Anyway, there’s an easy fix. We simply wrap the source with a call to `Observable.defer` to make it compute the results anew on every call:

```kotlin
val delayed = Observable.defer { source.delayUntil(3L) }
```

Alternatively, we can `cache` the output of the observable to prevent it from doing the same work twice like so:

```kotlin
val delayed = source.delayUntil(3L).cache()
```

In both cases, you can call the observables as many times as you want and get correct behavior.
