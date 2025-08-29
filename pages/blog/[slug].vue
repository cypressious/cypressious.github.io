<script setup lang="ts">
import { queryContent } from '#content'
import { createError } from 'h3'

const route = useRoute()

const { data: post } = await useAsyncData(
  () => `post:${route.params.slug}`,
  () => queryContent('posts').where({ slug: route.params.slug }).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
</script>

<template>
  <main class="container">
    <article>
      <header>
        <h1>{{ post.title }}</h1>
        <p v-if="post.date" class="date">{{ new Date(post.date).toLocaleDateString() }}</p>
        <p v-if="post.twitter">
          <a :href="post.twitter" target="_blank" rel="noopener">Discuss on Twitter</a>
        </p>
      </header>
      <ContentRenderer :value="post" />
    </article>
  </main>
</template>

<style scoped>
.container {
  max-width: 820px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.date {
  color: #666;
}
article :deep(img) {
  max-width: 100%;
}
</style>
