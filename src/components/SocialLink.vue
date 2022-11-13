<style scoped>
.social-icon {
    margin-right: 1rem;
}
</style>

<template>
    <a :href="href" target="_blank" :rel="combinedRels" :title="title" class="social-icon">
        <FontAwesomeLayers class="fa-3x has-text-primary">
            <FontAwesomeIcon icon="circle"/>
            <FontAwesomeIcon :icon="['fab', icon]" transform="shrink-7" class="has-text-white"/>
        </FontAwesomeLayers>
    </a>
</template>

<script lang="ts">
import LinkMixin from '@/components/LinkMixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class SocialLink extends Mixins(LinkMixin) {
    @Prop(Array)
    readonly rels?: unknown[];

    get combinedRels() {
        const list = ['noopener', ...(this.rels || [])]

        return list.join(' ')
    }
}
</script>
