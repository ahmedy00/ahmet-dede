<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'

</script>

<template>
  <div>
    <AppHeader />
    <div class="md:px-48 px-8">
      <RouterView />
    </div>
  </div>
</template>