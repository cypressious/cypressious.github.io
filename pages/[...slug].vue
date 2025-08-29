<script setup lang="ts">
import { queryContent } from '#content'
import { createError } from 'h3'

const route = useRoute()
const slugParam = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug as string)

// Avoid conflicting with /blog routes which are handled separately
if (slugParam.startsWith('blog')) {
  throw createError({ statusCode: 404 })
}

const targetPath = '/' + slugParam
const { data: doc } = await useAsyncData(
  () => `doc:${targetPath}`,
  () => queryContent().where({ _path: targetPath }).findOne()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Document not found' })
}
</script>

<template>
  <main class="container">
    <ContentRenderer :value="doc" />
  </main>
</template>

<style scoped>
.container {
  max-width: 820px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
