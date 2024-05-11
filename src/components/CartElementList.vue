<script setup>
import CartElement from './CartElement.vue';
</script>

<template>
  <ul class="flex flex-col flex-1 gap-4">
    <CartElement
      image-url="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :on-remove-item-click="() => console.log('remove test click')"
    />
    <CartElement
      image-url="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :on-remove-item-click="() => console.log('remove test click')"
    />
  </ul>
</template>
