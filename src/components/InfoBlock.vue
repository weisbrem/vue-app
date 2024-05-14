<script setup lang="ts">
defineProps({
  imageUrl: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img class="mb-4" width="80" height="80" :src="imageUrl" alt="Info block image" />

    <h3 class="mb-2 text-2xl font-medium">{{ title }}</h3>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>
