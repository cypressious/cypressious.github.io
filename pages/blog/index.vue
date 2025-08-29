<script setup lang="ts">
import { queryContent } from '#content'

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('posts')
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <main class="container">
    <h1>Blog</h1>
    <ul class="posts">
      <li v-for="post in posts" :key="post._id">
        <NuxtLink :to="`/blog/${post.slug}`">
          <strong>{{ post.title }}</strong>
        </NuxtLink>
        <small v-if="post.date" class="date">{{ new Date(post.date).toLocaleDateString() }}</small>
        <p v-if="post.description">{{ post.description }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.container {
  max-width: 820px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.posts {
  list-style: none;
  padding: 0;
}
.posts li {
  margin: 1.25rem 0;
}
.date {
  margin-left: 0.5rem;
  color: #666;
}
</style>
