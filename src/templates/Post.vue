<template>
    <Layout>
        <br>
        <g-link to="/" class="link">  &larr; Go Back</g-link>
        <div class="post-title">
            <h1>{{$page.post.title}}</h1>
            <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read
            </p>
        </div>
        <div class="post-content content">
            <p v-html="$page.post.content" />
        </div>
    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {

}
</script>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        content
        date (format: "D MMMM YYYY")
        timeToRead
    }
}
</page-query>
