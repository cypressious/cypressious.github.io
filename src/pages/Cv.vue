<template>
    <Layout>
        <h1 class="title is-3">Curriculum Vitae</h1>

        <div class="entries">

            <div v-for="edge in $page.allCv.edges" :key="edge.node.id"  class="mb-3">
                <div class="columns">
                    <div class="column">
                        <h2 class="title is-4">
                            {{ edge.node.title }}
                        </h2>

                        <div class="subtitle">{{ edge.node.at }}</div>

                        <div v-if="edge.node.tags" class="tags">
                            <div class="tag is-success" v-for="tag in edge.node.tags.split(', ')" :key="tag">{{ tag }}
                            </div>
                        </div>

                        <div v-html="edge.node.content"/>
                    </div>

                    <div class="column is-2 has-text-right-desktop">
                        <span class="has-text-primary is-size-5">{{ edge.node.when }}</span>
                    </div>
                </div>

                <hr>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import PostSummary from '@/components/PostSummary.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { PostSummary },
    metaInfo: {
        title: 'Cv'
    }
})
export default class Cv extends Vue {

}
</script>

<page-query>
query {
    allCv(sortBy: "order", order: DESC) {
        totalCount
        edges {
            node {
                id
                title
                at
                when
                tags
                content
            }
        }
    }
}
</page-query>
