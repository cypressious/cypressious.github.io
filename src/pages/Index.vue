<style scoped>
.profile-picture {
    width: 100px;
    border-radius: 50%;
}

.paragraph {
    margin-bottom: 4rem;
}
</style>

<template>
    <Layout>

        <div class="paragraph">
            <div class="columns mb-3">
                <div class="column is-narrow">
                    <img src="profile.jpg" class="profile-picture" alt="Profile picture">
                </div>
                <div class="column">
                    <h1 class="title is-1">Kirill <span class="has-text-primary">Rakhman</span></h1>
                    <p class="subtitle is-uppercase is-3">Karlsruhe, Germany</p>
                </div>
            </div>

            <p class="is-size-5">
                Hi there! I'm a software developer and tech enthusiast. Take a look at my work or get in touch via
                Social Media.
            </p>
        </div>

        <div class="paragraph">
            <h2 class="is-size-3 mb-1">Social Links</h2>

            <SocialLinks/>
        </div>

        <div class="paragraph">
            <h2 class="is-size-3 mb-1">Projects</h2>

            <Projects/>
        </div>

        <div class="paragraph">
            <h2 class="is-size-3 mb-1">Technologies</h2>

            <Technologies/>
        </div>
    </Layout>
</template>

<script lang="ts">
import Projects from '@/components/Projects.vue';

import { Component, Vue } from 'vue-property-decorator';
import SocialLinks from '../components/SocialLinks.vue';
import Technologies from '../components/Technologies.vue';

@Component({
    components: { Projects, Technologies, SocialLinks },
    metaInfo: {
        title: 'Main'
    }
})
export default class Index extends Vue {
}
</script>
