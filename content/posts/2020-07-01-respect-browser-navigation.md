---
title: "Respecting Browser Navigation in Single Page Applications"
description: "How to provide navigation in Single Page Applications that respects the browser"
date: 2020-07-01
slug: respecting-browser-navigation-spa
twitter: https://twitter.com/Cypressious/status/1278338377444622337
---

Anchors (`<a href="...">`) offer a simple concept for navigating between web pages. Clicking on them opens the URL. When using the left mouse button, the HTML decides if the page is opened in the same tab (default) or in a new tab (`target="_blank"`). Browsers provide the user with the possibility to override this behavior by middle clicking, <kbd>CTRL</kbd> clicking or using the context menu. 

The URL acts as a unique identifier for every document. You can save it and open it a later time to access the same document. This concept is known as _deep linking_.  

Single Page Applications (short SPAs) often hook into the browser's navigation to prevent page reloads when navigating between pages. Implemented naively, this would prevent the current URL from changing. This would break deep linking as reloading the current URL would revert to the initial state of the SPA. For this reason, most SPA frameworks like Vue.js, React or Angular have a _router_ API or library that implements navigation in a way that maps the browser URL to a component of your application.

Let's look at how we can use `vue-router`, the standard router library for Vue.js, to implement navigation in a way that respects both deep linking and the user's choice _where_ they want to open the clicked link. For an introduction to `vue-router`, refer to the [official documentation](https://router.vuejs.org/guide/).

## The &lt;router-link&gt; Component

The easiest way to link between _routes_ with `vue-router` is to use the `<router-link>` component. It accepts a prop named `to` that describes the target route.

```html
<router-link :to="{ name: 'customer', props: { id: 1 } }">Open Customer 1</router-link>
``` 

Let's look at the rendered HTML:

```html
<a href="/customers/1">Open Customer 1</a>
```

The router has resolved the URL of the target route to a deep link (✅). Left clicks will be intercepted by an event handler to render the page without a reload but middle clicking will open the URL in a new tab, just like the user expects (✅).

## The $router plugin

In addition to the `<router-link>` component, `vue-router` offers the `$router` plugin to trigger navigation programmatically. Here's how that could look.

```html
<template>
<button @click="openCustomer(1)">Open Customer 1</button>
</template>

<script>
export default {
    methods: {
        openCustomer(id) {
            this.$router.push({ name: 'customer', props: { id } });
        }           
    }   
}
</script>
```

Again, let's look at the rendered HTML:

```html
<button>Open Customer 1</button>
```

This is what I would call an anti-pattern. Left clicking the button will resolve the correct URL and open it in the current tab but now there's no way to open the link in a new tab or even to copy it to the clipboard (❌). This is very user-hostile. It's also bad for SEO, as crawlers won't be able to follow the link. 

**Don't do that!** 

Now, that doesn't mean there's no legitimate use case for programmatic navigation. Sometimes a navigation happens as an indirect result of a different action. One example is when a new customer is created and the API asynchronously returns its ID. Programmatic navigation can be used to then open the customer details.

## Hybrid approach

Finally, let's consider a use case where we want to allow the user to search for customers by name. We'll combine the two discussed approaches for the best user experience. For the implementation we'll use the [Autocomplete](https://buefy.org/documentation/autocomplete/) component from the [Buefy](https://buefy.org) component library.

```html
<template>
<BAutocomplete :data="suggestions" @typing="typed = $event" @select="navigateTo($event)">
    <template slot-scope="{ option: customer }">
        <router-link :to="resolveCustomer(customer)">
            {{ customer.name }}
        </router-link>
    </template>
</BAutocomplete>
</template>

<script>
export default {
    data() {
        return {
            customers: [],
            typed: ''        
        }     
    },
    computed: {
        suggestions() {
            return this.customers.filter(c => c.name.includes(this.typed));
        }       
    },
    methods: {
        resolveCustomer(id) {
            return { name: 'customer', props: { id } };
        },
        navigateTo(id) {
            this.$router.push(this.resolveCustomer(id));        
        }
    }   
}
</script>
```

The autocomplete is populated with the list of customers filtered by the user's typed query. We utilize a [scoped slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots-with-the-slot-scope-Attribute) to render the list items in the dropdown as `<router-link>`s. This way, the user can middle click the items or use the context menu to copy the URL (✅). However, we also handle the `@select` event of the autocomplete. It is triggered when the user selects a suggestion from the dropdown using the <kbd>Enter</kbd> key. In this case, we use programmatic navigation (`$router.push`) to navigate to the chosen route. 

## Conclusion

We have seen that using programmatic navigation can lead to worse user experience as users won't be able to use standard browser mechanisms like opening links a new tab or copying the URL to clipboard. The developers of `vue-router` have obviously considered this when designing the library and made it easy to _do the right thing_. Other frameworks offer similar features.

Next time when you resort to programmatic navigation, consider that users want to do more with links than opening them in place. When possible rely on standard browser mechanisms for the best user experience.  