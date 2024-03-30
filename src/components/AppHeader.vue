<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { useRoute } from 'vue-router'

const mode = useColorMode()
const router = useRoute()

const routes = ['home', 'articles', 'projects', 'contact']

</script>

<template>
  <header>
    <nav class="py-6 md:px-48 px-8">
      <div class="flex flex-wrap items-center justify-between">
        <RouterLink to="/">
          <span class="text-xl">Ahmet </span>
          <span class="text-xl font-bold text-primary">Dede</span>
        </RouterLink>
        <div class="flex items-center space-x-8">
          <span v-for="(route, index) in routes" :key="index" class="uppercase">
            <RouterLink :to="`/${route}`" :class="{'text-primary': router.fullPath === `/${route}`}">{{ route }}</RouterLink>
          </span>
          <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
            <mdicon name="theme-light-dark" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>