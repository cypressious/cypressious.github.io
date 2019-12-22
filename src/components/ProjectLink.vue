<template>
    <a :href="href" target="_blank" rel="noopener" class="button is-link">
        <span class="icon"><FontAwesomeIcon :icon="['fab', icon]"/></span>
        <span>{{ title }}</span>
    </a>
</template>

<script lang="ts">
import LinkMixin from '@/components/LinkMixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class ProjectLink extends Mixins(LinkMixin) {

}
</script>