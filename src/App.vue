<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';
import axios from 'axios';

import MainHeader from '@/components/MainHeader.vue';
import MainDrawer from '@/components/MainDrawer.vue';
import PageHome from '@/pages/PageHome.vue';

import type { ISneakersItem } from '@/types/sneakers.types';
import { API_ROUTES } from '@/constants/api';

const isDrawerOpen = ref<boolean>(false);
const isCreatingOrder = ref<boolean>(false);

const itemsInCart = ref<ISneakersItem[]>([]);

const totalCartPrice = computed(() => itemsInCart.value.reduce((acc, item) => acc + item.price, 0));
const vatPrice = computed(() => Math.round(totalCartPrice.value * 0.05));

const onCloseDrawer = () => {
  isDrawerOpen.value = false;
  document.documentElement.style.overflow = 'auto';
};
const onOpenDrawer = () => {
  isDrawerOpen.value = true;
  document.documentElement.style.overflow = 'hidden';
};

const handleAddToCart = (item: ISneakersItem) => {
  if (!item.isAdded) {
    itemsInCart.value.push(item);
    item.isAdded = true;
    return;
  }

  itemsInCart.value.splice(itemsInCart.value.indexOf(item), 1);
  item.isAdded = false;
};

const handleRemoveFromCart = (item: ISneakersItem) => {
  itemsInCart.value.splice(itemsInCart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    await axios.post(`${import.meta.env.VITE_API_URL}${API_ROUTES.orders}`, {
      items: itemsInCart.value,
      totalPrice: totalCartPrice.value,
    });

    itemsInCart.value = [];
  } catch (error) {
    console.log('App. Create order', error);
  } finally {
    isCreatingOrder.value = false;
  }
};

watch(
  itemsInCart,
  () => {
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart.value));
  },
  {
    deep: true,
  },
);

provide('cart', {
  onCloseDrawer,
  onOpenDrawer,
  itemsInCart,
  handleAddToCart,
  handleRemoveFromCart,
});
</script>

<template>
  <MainDrawer
    v-if="isDrawerOpen"
    :total-cart-price="totalCartPrice"
    :vat-price="vatPrice"
    :is-creating-order="isCreatingOrder"
    @create-order="createOrder"
  />

  <div class="w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <MainHeader :total-cart-price="totalCartPrice" @on-open-drawer="onOpenDrawer" />

    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>
