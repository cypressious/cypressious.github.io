<template>
    <Layout>
        <h1 class="title is-3">Curriculum Vitae</h1>

        <DatedElement v-for="edge in $page.allCv.edges" :key="edge.node.id"
                      :title="edge.node.title" :sub-title="edge.node.at" :date="edge.node.when">
            <div v-if="edge.node.tags" class="tags">
                <div class="tag is-success" v-for="tag in edge.node.tags" :key="tag">{{ tag }}
                </div>
            </div>

            <div v-html="edge.node.content"/>
        </DatedElement>
    </Layout>
</template>

<script lang="ts">
import DatedElement from '@/components/DatedElement.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { DatedElement },
    metaInfo: {
        title: 'CV'
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
