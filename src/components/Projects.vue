<style scoped>
</style>

<template>
    <div>
        <Project title="KIT Mensa App"
                 subtitle="Android app for the KIT canteen plan."
                 :tags="['Android', 'Java', 'Kotlin']">
            <ProjectLink icon="google-play" title="Google Play"
                       href="https://play.google.com/store/apps/details?id=com.cypressworks.mensaplan"/>
            <ProjectLink icon="github" title="Github" href="https://github.com/cypressious/KitMensaAndroid"/>
        </Project>

        <Project title="Kotlin WebExtensions API Declarations"
                 subtitle="A generator for Kotlin JS declarations for the Firefox WebExtensions API."
                 :tags="['Kotlin', 'JavaScript', 'Browser Extensions']">
            <ProjectLink icon="github" title="Github"
                       href="https://github.com/cypressious/kotlin-webextensions-declarations"/>
        </Project>
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