<script setup lang="ts">
import { inject, ref, computed } from 'vue';
import axios from 'axios';

import DrawerHead from '@/components/DrawerHead.vue';
import CartElementList from '@/components/CartElementList.vue';
import InfoBlock from '@/components/InfoBlock.vue';

import type { ICartProvide } from '@/types/provide.types';

import { API_ROUTES } from '@/constants/api';

const { totalCartPrice } = defineProps({
  totalCartPrice: Number,
});
const { onCloseDrawer, itemsInCart } = inject('cart') as ICartProvide;

const isCreatingOrder = ref<boolean>(false);
const orderId = ref<number | null>(null);
const vatPrice = computed(() => totalCartPrice && Math.round(totalCartPrice * 0.05));

const onCreateOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}${API_ROUTES.orders}`, {
      items: itemsInCart.value,
      totalPrice: totalCartPrice,
    });

    itemsInCart.value = [];
    orderId.value = data.id;
  } catch (error) {
    console.log('Drawer. Create order', error);
  } finally {
    isCreatingOrder.value = false;
  }
};
</script>

<template>
  <div
    @click="onCloseDrawer"
    class="fixed top-0 left-0 h-screen w-screen bg-black opacity-70 z-10 cursor-pointer"
  />

  <div class="fixed right-0 top-0 z-20 flex gap-8 flex-col bg-white h-screen w-96 p-8">
    <DrawerHead />

    <div class="flex items-center h-full" v-if="!totalCartPrice || orderId">
      <InfoBlock
        v-if="orderId"
        imageUrl="/order-success-icon.png"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
      />

      <InfoBlock
        v-if="!totalCartPrice && !orderId"
        imageUrl="/package-icon.png"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ"
      />
    </div>

    <CartElementList v-if="totalCartPrice" />

    <div v-if="totalCartPrice">
      <div class="flex gap-2 mb-5">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed mb-1" />
        <span class="font-bold">{{ totalCartPrice }} руб.</span>
      </div>

      <div class="flex gap-2 mb-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed mb-1" />
        <span class="font-bold">{{ vatPrice }} руб.</span>
      </div>

      <button
        @click="onCreateOrder"
        :disabled="isCreatingOrder"
        class="w-full py-3 bg-lime-500 rounded-2xl text-white hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 transition"
      >
        {{ isCreatingOrder ? 'Обработка...' : 'Оформить заказ' }}
      </button>
    </div>
  </div>
</template>
