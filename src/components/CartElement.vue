<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  onRemoveItemClick: Function
})
</script>

<template>
  <li class="flex items-center gap-4 p-4 border rounded-xl border-slate-100">
    <img class="w-16 h-16" :src="imageUrl" alt="Sneaker" />

    <div class="flex flex-col">
      <p class="mb-2">{{ title }}</p>

      <div class="flex justify-between">
        <span class="font-bold">{{ price }} руб.</span>
        <button class="group" @click="onRemoveItemClick">
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
