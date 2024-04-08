<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { useRoute } from 'vue-router'

const mode = useColorMode()
const router = useRoute()

const routes = ['home', 'articles', 'projects', 'contact']

</script>

<template>
  <header>
    <nav class="py-6 lg:px-72 md:px-32 px-8">
      <div class="flex flex-wrap items-center justify-between">
        <RouterLink to="/">
          <span class="text-xl">Ahmet </span>
          <span class="text-xl font-bold text-primary">Dede</span>
        </RouterLink>
        <div class="md:flex hidden items-center space-x-8">
          <span v-for="(route, index) in routes" :key="index" class="uppercase">
            <RouterLink :to="`/${route}`" :class="{'text-primary': router.fullPath === `/${route}`}">{{ route }}</RouterLink>
          </span>
        </div>
        <button class="md:block hidden" @click="mode = mode === 'dark' ? 'light' : 'dark'">
          <mdicon name="theme-light-dark" />
        </button>
        <div class="md:hidden flex flex-row">
          <button class="md:hidden block mr-8" @click="mode = mode === 'dark' ? 'light' : 'dark'">
            <mdicon name="theme-light-dark" />
          </button>
          <div>
            <div class="text-center">
              <button class="mt-2" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                <mdicon name="menu" size="28"></mdicon>
              </button>
            </div>
            <div id="drawer-navigation" class="fixed z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
              <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 hover:text-primary rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5" >
                <mdicon name="close"></mdicon>
                <span class="sr-only">Close menu</span>
              </button>
              <div class="mt-12">
              <span v-for="(route, index) in routes" :key="index" class="uppercase flex flex-col" data-drawer-hide="drawer-navigation">
                <RouterLink :to="`/${route}`" :class="{'text-primary': router.fullPath === `/${route}`}" class="px-4 py-2">{{ route }}</RouterLink>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>