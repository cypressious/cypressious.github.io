<style scoped>
</style>

<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
            <Project class="tile is-child" title="KIT Mensa App"
                     subtitle="Android app for the KIT canteen plan."
                     :tags="['Android', 'Java', 'Kotlin']">
                <ProjectLink icon="google-play" title="Google Play"
                             href="https://play.google.com/store/apps/details?id=com.cypressworks.mensaplan"/>
                <ProjectLink icon="github" title="Github" href="https://github.com/cypressious/KitMensaAndroid"/>
            </Project>
        </div>
        <div class="tile is-parent is-6">
            <Project class="tile is-child" title="Kotlin WebExtensions API Declarations"
                     subtitle="A generator for Kotlin JS declarations for the Firefox WebExtensions API."
                     :tags="['Kotlin', 'JavaScript', 'Browser Extensions']">
                <ProjectLink icon="github" title="Github"
                             href="https://github.com/cypressious/kotlin-webextensions-declarations"/>
            </Project>
        </div>
    </div>
</template>

<script lang="ts">
import Project from '@/components/Project.vue';
import ProjectLink from '@/components/ProjectLink.vue';

export default {
    name: 'Projects',
    components: { ProjectLink, Project }
};
</script>
