<template>
    <DatedElement :title="talk.title" :sub-title="talk.where" :date="talk.date">
        <div class="buttons">
            <ProjectLink v-if="talk.page" icon="eye" icon-category="fas" title="Page" :href="talk.page"/>
            <ProjectLink v-if="talk.slides" icon="file-pdf" icon-category="fas" title="Slides"
                         :href="talk.slides"/>
            <ProjectLink v-if="talk.recording" icon="video" icon-category="fas" title="Recording"
                         :href="talk.recording"/>
        </div>
    </DatedElement>
</template>

<script lang="ts">
import DatedElement from '@/components/DatedElement.vue';
import ProjectLink from '@/components/ProjectLink.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    components: { ProjectLink, DatedElement }
})
export default class Talk extends Vue {
    @Prop({ type: Object, required: true }) readonly talk!: any;
}
</script>
