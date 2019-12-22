<template>
    <div class="post-list">

        <p class="date" v-html="post.date"/>
        <h1 class="title">
            <g-link :to="post.path" class="read"><span class="has-text-black" v-html="post.title"/></g-link>
        </h1>

        <p class="description" v-html="post.description"/>
        <g-link :to="post.path" class="read">Read More...</g-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PostSummary extends Vue {
    @Prop(Object) readonly post!: any;
}
</script>