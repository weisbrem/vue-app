<script setup lang="ts">
import { inject } from 'vue';

import CartElement from '@/components/CartElement.vue';

import type { ICartProvide } from '@/types/provide.types';

const { itemsInCart, handleRemoveFromCart } = inject('cart') as ICartProvide;
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
