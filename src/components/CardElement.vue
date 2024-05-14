<script setup lang="ts">
interface IProps {
  imageUrl: string;
  title: string;
  price: number;
  isFavorite?: boolean;
  isAdded?: boolean;
  onFavoriteClick: (() => void) | null;
  onAddClick: (() => void) | null;
}

const { imageUrl, title, price, isFavorite, isAdded, onFavoriteClick, onAddClick } =
  defineProps<IProps>();
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
