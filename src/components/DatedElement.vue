<template>
    <div class="mb-3">
        <div class="columns">
            <div class="column">
                <h2 class="title is-4">
                    <component :is="href ? 'g-link' : 'span'" :to="href">{{ title }}</component>
                </h2>

                <div class="subtitle">{{ subTitle }}</div>

                <slot/>

                <g-link v-if="href" :to="href" class="read">Read More...</g-link>
            </div>

            <div class="column is-2 has-text-right-desktop">
                <span class="has-text-primary is-size-5">{{ date }}</span>
            </div>
        </div>

        <hr>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DatedElement extends Vue {
    @Prop({ type: String, required: true }) readonly title!: string;
    @Prop({ type: String, required: true }) readonly subTitle!: string;
    @Prop({ type: String, required: true }) readonly date!: string;
    @Prop({ type: String }) readonly href?: string;
}
</script>
