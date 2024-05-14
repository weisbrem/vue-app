<script setup lang="ts">
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
});

const emit = defineEmits(['onRemoveItemClick']);
</script>

<template>
  <li class="flex items-center gap-4 p-4 border rounded-xl border-slate-100">
    <img class="w-16 h-16" :src="imageUrl" :alt="title" />

    <div class="flex flex-col flex-1">
      <p class="mb-2">{{ title }}</p>

      <div class="flex justify-between items-center">
        <span class="font-bold flex-1">{{ price }} руб.</span>
        <button class="group" @click="emit('onRemoveItemClick')">
          <img
            class="opacity-40 group-hover:opacity-100 transition"
            src="/close.svg"
            alt="Remove item from cart"
          />
        </button>
      </div>
    </div>
  </li>
</template>
