<script setup lang="ts">
import photo from '../assets/ProfileImage.png'

</script>

<template>
  <div class="hexagon animate-slide-up m-auto md:mt-40 mt-4 lg:ml-24 md:ml-8 xl:w-[450px] xl:h-[400px] md:w-[360px] md:h-[280px] w-[240px] h-[210px]">
    <img :src="photo" alt="Ahmet Dede" class="mx-auto xl:w-[500px] xl:h-[500px] md:w-[360px] md:h-[360px] w-[300px] h-[300px]">
  </div>
</template>

<style scoped>
.hexagon {
  background-color: var(--color-primary);
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
  position: relative;
}

</style>