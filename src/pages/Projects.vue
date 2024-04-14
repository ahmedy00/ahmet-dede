<script setup lang="ts">
import projects from '../utils/projects.ts'

</script>

<template>
  <div class="animate-slide-down grid lg:grid-cols-2 grid-cols-1 gap-12 mt-12">
    <div v-for="(project, index) in projects" :key="`project-${index}`" class="bg-primary border rounded-lg shadow">
      <div class="p-5 text-light-text">
        <h5 class="text-2xl font-bold tracking-tight text-center mt-4 mb-8">{{ project.name }}</h5>
        <img :src="project.image" alt="Todo App" class="mx-auto h-[400px]">
        <p class="my-3 font-normal">{{ project.description }}</p>
        <div class="flex items-center justify-between mt-8">
          <button class="dark:bg-dark-background bg-light-background py-2 px-6 rounded shadow-md shadow-blue-800">
            <a :href="project.blitz" target="_blank" class="flex flex-row items-center space-x-2 dark:text-light-text text-dark-text">
              <span>Try it live</span>
              <mdicon name="arrow-right" />
            </a>
          </button>
          <p>
            <a :href="project.github" target="_blank">View on Github</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>