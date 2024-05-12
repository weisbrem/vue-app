<script setup lang="ts">
import CardElement from '@/components/CardElement.vue';
import type { ISneakersItem } from '@/types/sneakers.types';

const props = defineProps({
  items: Array<ISneakersItem>,
  isFavorites: Boolean,
});

const emit = defineEmits(['onAddToFavorite', 'onAddToCart']);
</script>

<template>
  <ul class="grid grid-cols-4 gap-5" v-auto-animate>
    <CardElement
      v-for="item in items"
      :key="item.id"
      :image-url="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :is-favorite="item.isFavorite"
      :is-added="item.isAdded"
      :on-favorite-click="isFavorites ? null : () => emit('onAddToFavorite', item)"
      :on-add-click="isFavorites ? null : () => emit('onAddToCart', item)"
    />
  </ul>
</template>
