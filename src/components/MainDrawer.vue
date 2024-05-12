<script setup>
import { inject } from 'vue';
import DrawerHead from './DrawerHead.vue';
import CartElementList from './CartElementList.vue';

const { onCloseDrawer } = inject('cartActions');
</script>

<template>
  <div
    @click="onCloseDrawer"
    class="fixed top-0 left-0 h-screen w-screen bg-black opacity-70 z-10 cursor-pointer"
  />

  <div class="fixed right-0 top-0 z-20 flex gap-8 flex-col bg-white h-screen w-96 p-8">
    <DrawerHead />

    <CartElementList />

    <div>
      <div class="flex gap-2 mb-5">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed mb-1" />
        <span class="font-bold">1205 руб.</span>
      </div>

      <div class="flex gap-2 mb-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed mb-1" />
        <span class="font-bold">1205 руб.</span>
      </div>

      <button
        class="w-full py-3 bg-lime-500 rounded-2xl text-white hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 transition"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
