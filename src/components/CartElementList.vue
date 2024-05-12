<script setup>
import { inject } from 'vue';
import CartElement from './CartElement.vue';

const { itemsInCart, handleRemoveFromCart } = inject('cart');
</script>

<template>
  <ul class="flex flex-col flex-1 gap-4" v-auto-animate>
    <CartElement
      v-for="item in itemsInCart"
      :key="item.id"
      :image-url="item.imageUrl"
      :title="item.title"
      :price="item.price"
      @on-remove-item-click="() => handleRemoveFromCart(item)"
    />
  </ul>
</template>
