<template>
    <DatedElement :title="post.title" :sub-title="post.description" :date="post.date">
        <g-link :to="post.path" class="read">Read More...</g-link>
    </DatedElement>
</template>

<script lang="ts">
import DatedElement from '@/components/DatedElement.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    components: { DatedElement }
})
export default class PostSummary extends Vue {
    @Prop(Object) readonly post!: any;
}
</script>
