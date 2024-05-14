<script setup lang="ts">
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onFavoriteClick: { type: [Function, null], required: true },
  onAddClick: { type: [Function, null], required: true },
});
</script>

<template>
  <li
    class="relative bg-white p-8 border border-slate-100 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition"
  >
    <button v-if="onFavoriteClick" @click="onFavoriteClick" class="absolute top-8 left-8">
      <img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="Like icon" />
    </button>

    <img class="mb-5" :src="imageUrl" alt="Sneaker" />

    <p class="mb-5">{{ title }}</p>

    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <span class="font-bold">{{ price }} руб.</span>
      </div>

      <button v-if="onAddClick" @click="onAddClick">
        <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Add item to cart icon" />
      </button>
    </div>
  </li>
</template>
