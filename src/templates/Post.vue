<style scoped>
.content >>> .tag, .content >>> .number, .content >>> .label {
    display: inline;
    padding: inherit;
    font-size: inherit;
    line-height: inherit;
    text-align: inherit;
    vertical-align: inherit;
    border-radius: inherit;
    font-weight: inherit;
    white-space: inherit;
    background: inherit;
    margin: inherit;
}

.content >>> .hashtag:before {
    content: '#';
    margin-right: .5rem;
}

.content >>> a > code {
    text-decoration-line: underline;
}
</style>

<template>
    <Layout>
        <div class="post-title mb-2">
            <h1 class="title">{{ $page.post.title }}</h1>
            <p class="subtitle">
                {{ $page.post.date }} | {{ $page.post.timeToRead }} min read
            </p>
        </div>

        <div class="content mb-2">
            <p v-html="$page.post.content"/>
        </div>

        <g-link to="/blog">
            <FontAwesomeIcon icon="arrow-left"/>
            All Blog Posts
        </g-link>

    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'prismjs/themes/prism.css';

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
