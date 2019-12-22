<style scoped lang="scss">
@import '~bulma/sass/utilities/initial-variables';

.notification {
    background-color: unset;
    border: $grey-lighter 1px solid;
}
</style>

<template>
    <div class="notification">
        <div class="title is-4">{{ title }}</div>
        <p class="subtitle">{{ subtitle }}</p>

        <div class="tags">
            <div v-for="tag in tags" :key="tag" class="tag is-success">{{ tag }}</div>
        </div>

        <div class="buttons mb-1">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
    @Prop({ type: String, required: true })
    readonly title!: string;

    @Prop({ type: String, required: true })
    readonly subtitle!: string;

    @Prop({ type: Array, required: true })
    readonly tags!: string[];
}
</script>