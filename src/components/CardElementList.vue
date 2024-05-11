<script setup lang="ts">
import CardElement from './CardElement.vue'
import { ISneakersItem } from '@/types'

defineProps({
  items: Array<ISneakersItem>
})
</script>

<template>
  <ul class="grid grid-cols-4 gap-5">
    <CardElement
      v-for="{ title, price, imageUrl, id, isFavorite, isAdded } in items"
      :key="id"
      :image-url="imageUrl"
      :title="title"
      :price="price"
      :is-favorite="isFavorite"
      :is-added="isAdded"
      :on-favorite-click="() => console.log('favorite test click')"
      :on-add-click="() => console.log('add test click')"
    />
  </ul>
</template>
