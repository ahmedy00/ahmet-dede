<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'

</script>

<template>
  <div>
    <AppHeader />
    <div class="lg:px-48 md:px-32 px-8">
      <RouterView />
    </div>
  </div>
</template>