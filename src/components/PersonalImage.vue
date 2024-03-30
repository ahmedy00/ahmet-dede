<script setup lang="ts">
import photo from '../assets/ProfileImage.png'

</script>

<template>
  <div class="hexagon m-auto md:mt-24 md:ml-24 xl:w-[450px] xl:h-[400px] md:w-[400px] md:h-[320px] w-[350px] h-[290px]">
    <img :src="photo" alt="Ahmet Dede" class="mx-auto xl:w-[500px] xl:h-[500px] md:w-[400px] md:h-[400px] w-[350px] h-[350px]">
  </div>
</template>

<style scoped>
.hexagon {
  background-color: var(--color-primary);
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
  position: relative;
}

</style>