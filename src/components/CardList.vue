<script setup lang="ts">
import CardElement from './CardElement.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <CardElement
      image-url="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-favorite="false"
      :is-added="true"
      :on-favorite-click="() => console.log('favorite test click')"
      :on-add-click="() => console.log('add test click')"
    />
  </div>
</template>
