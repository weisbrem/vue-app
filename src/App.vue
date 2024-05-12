<script setup>
import { computed, provide, ref, watch } from 'vue';

import MainHeader from './components/MainHeader.vue';
import MainDrawer from './components/MainDrawer.vue';

const isDrawerOpen = ref(false);

const itemsInCart = ref([]);

const totalCartPrice = computed(() => itemsInCart.value.reduce((acc, item) => acc + item.price, 0));

const onCloseDrawer = () => {
  isDrawerOpen.value = false;
  document.documentElement.style.overflow = 'auto';
};
const onOpenDrawer = () => {
  isDrawerOpen.value = true;
  document.documentElement.style.overflow = 'hidden';
};

const handleAddToCart = (item) => {
  if (!item.isAdded) {
    itemsInCart.value.push(item);
    item.isAdded = true;
    return;
  }

  itemsInCart.value.splice(itemsInCart.value.indexOf(item), 1);
  item.isAdded = false;
};

const handleRemoveFromCart = (item) => {
  itemsInCart.value.splice(itemsInCart.value.indexOf(item), 1);
  item.isAdded = false;
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
  <MainDrawer v-if="isDrawerOpen" :total-cart-price="totalCartPrice" />

  <div class="w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <MainHeader :total-cart-price="totalCartPrice" @on-open-drawer="onOpenDrawer" />

    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>
