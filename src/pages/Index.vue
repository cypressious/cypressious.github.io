<style scoped>
.profile-picture {
    border-radius: 50%;
}

.paragraph {
    margin-bottom: 4rem;
}
</style>

<template>
    <Layout>
        <div class="mb-2">
            <div class="columns mb-3">
                <div class="column is-narrow">
                    <g-image src="../assets/profile.jpg" class="profile-picture" alt="Profile picture" width="100"/>
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

        <div class="paragraph">
            <h2 class="is-size-3 mb-1">Latest Talk</h2>

            <Talk :talk="$page.allTalk.edges[0].node" style="margin-bottom: 1rem"/>

            <g-link to="/talks" class="is-size-4">More Talks...</g-link>
        </div>

        <div class="paragraph">
            <h2 class="is-size-3 mb-1">Latest Blog Post</h2>

            <PostSummary :post="$page.allPost.edges[0].node" style="margin-bottom: 1rem"/>

            <g-link to="/blog" class="is-size-4">More Blog Posts...</g-link>
        </div>
    </Layout>
</template>

<script lang="ts">
import PostSummary from '@/components/PostSummary.vue';
import Projects from '@/components/Projects.vue';
import Talk from '@/components/Talk.vue';
import { Component, Vue } from 'vue-property-decorator';
import SocialLinks from '../components/SocialLinks.vue';
import Technologies from '../components/Technologies.vue';

@Component({
    components: { PostSummary, Talk, Projects, Technologies, SocialLinks },
    metaInfo: {
        title: 'Main'
    }
})
export default class Index extends Vue {
}
</script>

<page-query>
query {
    allTalk(sortBy: "date", order: DESC, limit: 1) {
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
    allPost {
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
