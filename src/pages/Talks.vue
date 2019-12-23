<style scoped>

</style>

<template>
    <Layout>
        <h1 class="title is-3">Talks</h1>

        <DatedElement v-for="edge in $page.allTalk.edges" :key="edge.node.id"
                      :title="edge.node.title" :sub-title="edge.node.where" :date="edge.node.date">
         <div class="buttons">
             <ProjectLink v-if="edge.node.page" icon="eye" icon-category="fas" title="Page" :href="edge.node.page"/>
             <ProjectLink v-if="edge.node.slides" icon="file-pdf" icon-category="fas" title="Slides" :href="edge.node.slides"/>
             <ProjectLink v-if="edge.node.recording" icon="video" icon-category="fas" title="Recording" :href="edge.node.recording"/>
         </div>
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
