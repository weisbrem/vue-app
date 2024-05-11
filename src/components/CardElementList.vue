<script setup lang="ts">
import CardElement from './CardElement.vue'
import { ISneakersItem } from '@/types/sneakers.types'

defineProps({
  items: Array<ISneakersItem>
})

const emit = defineEmits(['onAddToFavorite'])
</script>

<template>
  <ul class="grid grid-cols-4 gap-5">
    <CardElement
      v-for="item in items"
      :key="item.id"
      :image-url="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :is-favorite="item.isFavorite"
      :is-added="item.isAdded"
      :on-favorite-click="() => emit('onAddToFavorite', item)"
      :on-add-click="() => console.log('add test click')"
    />
  </ul>
</template>
