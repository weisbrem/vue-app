<script setup lang="ts">
import { inject } from 'vue';

import type { ICartProvide } from '@/types/provide.types';

const { onCloseDrawer } = inject('cart') as ICartProvide;
</script>

<template>
  <div class="flex items-center gap-5">
    <button @click="onCloseDrawer" class="w-4 h-4 group">
      <svg
        class="opacity-30 rotate-180 group-hover:opacity-100 transition group-hover:-translate-x-1"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <h3 class="text-2xl font-bold">Корзина</h3>
  </div>
</template>
