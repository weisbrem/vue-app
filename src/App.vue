<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

import MainHeader from '@/components/MainHeader.vue'
import CardElementList from '@/components/CardElementList.vue'
// import MainDrawer from '@/components/MainDrawer.vue'

// import MainDrawer from '@/components/MainDrawer.vue'
import type { ISneakersItem } from '@/types/sneakers.types'
import type { ISearchParams } from '@/types/searchParams.types'
import { API_ROUTES } from '@/constants/api'

const items = ref<ISneakersItem[]>([])
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onSelectChange = (evt: Event) => {
  const { value } = evt.target as HTMLSelectElement

  filters.sortBy = value
}

const onChangeSearchInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement

  filters.searchQuery = value
}

const getSneakers = async () => {
  const params: ISearchParams = {
    sortBy: filters.sortBy
  }

  if (filters.searchQuery) {
    params.title = `*${filters.searchQuery}*`
  }

  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}${API_ROUTES.getSneakers}`, {
      params
    })

    items.value = data
  } catch (error) {
    console.log('App', error)
  }
}

onMounted(getSneakers)

watch(filters, getSneakers)
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
            @change="onSelectChange"
          >
            <option value="title">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>

          <input
            @input="onChangeSearchInput"
            class="relative border rounded-md py-2 pr-4 pl-10 outline-none focus:border-gray-400 bg-[url('/search.svg')] bg-[12px] bg-no-repeat"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <CardElementList :items="items" />
    </div>
  </div>
</template>
