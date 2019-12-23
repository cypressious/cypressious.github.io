<style scoped>

</style>

<template>
    <Layout>
        <h1 class="title is-3">Talks</h1>

        <Talk v-for="edge in $page.allTalk.edges" :key="edge.node.id" :talk="edge.node"/>
    </Layout>
</template>

<script lang="ts">
import DatedElement from '@/components/DatedElement.vue';
import ProjectLink from '@/components/ProjectLink.vue';
import Talk from '@/components/Talk.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { Talk, ProjectLink, DatedElement },
    metaInfo: {
        title: 'Talks'
    }
})
export default class Talks extends Vue {
}
</script>

<page-query>
query {
    allTalk(sortBy: "date", order: DESC) {
        totalCount
        edges {
            node {
                id
                title
                where
                date (format: "YYYY-MM-DD")
                slides
                recording
                page
            }
        }
    }
}
</page-query>
