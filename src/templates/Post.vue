<style scoped lang="scss">
@import "../styles/colors";
@import "~bulma/sass/utilities/initial-variables";

.content::v-deep {
    p {
        font-size: 1.25rem;
        text-align: justify;
        line-height: 1.25;
    }

    .tag, .number, .label {
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

    .hashtag:before {
        content: '#';
        margin-right: .5rem;
    }

    a > code {
        text-decoration-line: underline;
    }

    .kotlin::after {
        content: 'Kotlin';
    }

    .cs::after {
        content: 'C#';
    }

    .kotlin, .cs {
        > pre {
            margin-bottom: 0;
        }

        &::after {
            display: block;
            text-align: center;
            font-weight: $weight-semibold;
            text-transform: uppercase;
            background-color: $primary;
            color: $white;
        }
    }

    kbd {
        display: inline-block;
        padding: 3px 5px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        box-shadow: inset 0 -1px 0 #d1d5da;
        font-size: .8rem;
    }
}
</style>

<template>
    <Layout>
        <g-link to="/blog">
            <FontAwesomeIcon icon="arrow-left"/>
            All Blog Posts
        </g-link>

        <div class="post-title mb-2">
            <h1 class="title">{{ $page.post.title }}</h1>
            <p class="subtitle">
                {{ $page.post.date }}
            </p>
        </div>

        <div class="content" v-html="$page.post.content"/>

        <hr class="mb-3">

        <div v-if="$page.post.twitter" class="discuss mb-3">
            <h2 class="is-size-4"><a :href="$page.post.twitter" rel="noopener" target="_blank">
                <FontAwesomeIcon :icon="['fab', 'twitter']"/>
                Discuss on Twitter
            </a></h2>
        </div>

        <g-link to="/blog">
            <FontAwesomeIcon icon="arrow-left"/>
            All Blog Posts
        </g-link>

    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'prismjs/themes/prism-tomorrow.css';

@Component({
    metaInfo(this: Post) {
        return {
            title: this.$page.post.title,
            meta:[{
                key: 'description',
                name: 'description',
                content: this.$page.post.description
            }]
        };
    }
})
export default class Post extends Vue {
    $page!: {
        post: {
            title: string
            description: string
            date: string
            twitter?: string
        }
    }
}
</script>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        content
        date (format: "D MMMM YYYY")
        twitter
        description
    }
}
</page-query>
