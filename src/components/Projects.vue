<template>
   <div>
       <div v-for="(chunk, index) in projectChunks" :key="index" class="tile is-ancestor">
           <div v-for="project in chunk" :key="project.title" class="tile is-parent is-6">
               <!--suppress RequiredAttributes -->
               <Project class="tile is-child" v-bind="project">
                   <ProjectLink v-for="link in project.links" :key="link.title" v-bind="link"/>
               </Project>
           </div>
       </div>
   </div>
</template>

<script lang="ts">
import Project from '@/components/Project.vue';
import ProjectLink from '@/components/ProjectLink.vue';
import { chunk } from 'lodash-es';
import { Component, Vue } from 'vue-property-decorator';
import projects from '../data/projects.json';

@Component({
    components: { ProjectLink, Project }
})
export default class Projects extends Vue {
    projects = projects;

    get projectChunks() {
        return chunk(this.projects, 2)
    }
}
</script>
