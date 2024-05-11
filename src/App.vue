<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import CardElementList from '@/components/CardElementList.vue'
// import MainDrawer from '@/components/MainDrawer.vue'
</script>

<template>
  <!-- TODO: return when open drawer functional will be ready -->
  <!-- <MainDrawer /> -->

  <div class="w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <MainHeader />

    <div class="p-10">
      <div class="flex justify-between mb-8">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>

        <div>
          <select
            class="mr-5 outline-none p-2 border rounded-md hover:border-gray-300 focus:border-gray-400"
          >
            <option>По названию</option>
            <option>По цене (дешевые)</option>
            <option>По цене (дорогие)</option>
          </select>

          <input
            class="relative border rounded-md py-2 pr-4 pl-10 outline-none focus:border-gray-400 bg-[url('/search.svg')] bg-[12px] bg-no-repeat"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <CardElementList />
    </div>
  </div>
</template>
