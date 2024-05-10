<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import CardElementList from '@/components/CardElementList.vue'
import MainDrawer from '@/components/MainDrawer.vue'
</script>

<template>
  <MainDrawer />

  <div class="w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <MainHeader />

    <div class="p-10">
      <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

      <CardElementList />
    </div>
  </div>
</template>
