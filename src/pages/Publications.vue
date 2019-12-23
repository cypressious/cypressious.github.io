<style scoped>

</style>

<template>
    <Layout>
        <h1 class="title is-3">Publications</h1>

        <DatedElement v-for="edge in $page.allPublication.edges" :key="edge.node.id"
                      :title="edge.node.title" :sub-title="edge.node.description" :date="edge.node.displayDate">
            <ProjectLink icon="eye" icon-category="fas" title="View" :href="edge.node.url"/>
        </DatedElement>
    </Layout>
</template>

<script lang="ts">
import DatedElement from '@/components/DatedElement.vue';
import ProjectLink from '@/components/ProjectLink.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { ProjectLink, DatedElement },
    metaInfo: {
        title: 'Publications'
    }
})
export default class Publications extends Vue {
}
</script>

<page-query>
query {
    allPublication(sortBy: "date", order: DESC) {
        totalCount
        edges {
            node {
                id
                title
                description
                displayDate
                url
            }
        }
    }
}
</page-query>
