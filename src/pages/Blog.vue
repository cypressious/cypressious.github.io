<template>
    <Layout>
        <h1 class="title is-3">Blog Posts</h1>

        <div class="posts">
            <PostSummary v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
    </Layout>
</template>

<script lang="ts">
import PostSummary from '@/components/PostSummary.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { PostSummary },
    metaInfo: {
        title: 'Blog'
    }
})
export default class Blog extends Vue {

}
</script>

<page-query>
query {
    allPost(sortBy: "date", order: DESC) {
        totalCount
        edges {
            node {
                id
                title
                description
                date (format: "YYYY-MM-DD")
                path
            }
        }
    }
}
</page-query>
