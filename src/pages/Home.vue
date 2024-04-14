<script setup lang="ts">
import PersonalInfo from '../components/PersonalInfo.vue'
import PersonalImage from '../components/PersonalImage.vue'

</script>

<template>
  <div class="">
    <div class="grid md:grid-cols-2 grid-cols-1">
      <PersonalInfo />
      <PersonalImage />
    </div>
    <div class="flex justify-center md:mt-48 mt-16 text-primary space-x-8 animate-slide-up md:animate-none">
      <a href="https://www.github.com/ahmedy00" target="_blank">
        <mdicon name="github" :size="36" />
      </a>
      <a href="https://www.linkedin.com/in/ahmet-dede/" target="_blank">
        <mdicon name="linkedin" :size="36" />
      </a>
    </div>
  </div>
</template>

