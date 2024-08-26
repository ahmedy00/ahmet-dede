<script setup lang="ts">
import resume from '../assets/Ahmet_DEDE_CV.pdf'
</script>

<template>
  <div class="d-flex items-center md:py-36 py-4 md:text-start text-center animate-slide-down">
    <h3 class="py-2 text-2xl">Hello <span class="text-primary">I'm</span></h3>
    <h1 class="text-primary py-2 text-4xl font-bold">Ahmet DEDE</h1>
    <h3 class="text-2xl py-2">Software Developer</h3>
    <p class="text-sm py-2 md:max-w-96">I’m committed to writing efficient, maintainable code that drives value. I believe in continuous learning and applying cutting-edge technologies to solve real-world problems.</p>
    <button class="bg-primary py-2 px-6 mt-8 rounded font-bold text-light-text">
      <a :href="resume" download="Ahmet_DEDE_CV.pdf">
        Get My Full Resume
      </a>
    </button>
  </div>
</template>