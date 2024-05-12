<script setup lang="ts">
import { onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';

import MainHeader from '@/components/MainHeader.vue';
import CardElementList from '@/components/CardElementList.vue';
import MainDrawer from '@/components/MainDrawer.vue';

import type { ISneakersItem } from '@/types/sneakers.types';
import type { ISearchParams } from '@/types/searchParams.types';
import { API_ROUTES } from '@/constants/api';

const isDrawerOpen = ref<boolean>(false);
const items = ref<ISneakersItem[]>([]);
const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
});

const onCloseDrawer = () => {
  isDrawerOpen.value = false;
};
const onOpenDrawer = () => {
  isDrawerOpen.value = true;
};

const onSelectChange = (evt: Event) => {
  const { value } = evt.target as HTMLSelectElement;

  filters.sortBy = value;
};

const onChangeSearchInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;

  filters.searchQuery = value;
};

const onAddToFavorite = async (item: ISneakersItem) => {
  try {
    if (!item.isFavorite) {
      const updatedItem = {
        productId: item.id,
      };

      item.isFavorite = true;

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}${API_ROUTES.favorites}`,
        updatedItem,
      );

      item.favoriteId = data.id;

      return;
    }

    item.isFavorite = false;

    await axios.delete(`${import.meta.env.VITE_API_URL}${API_ROUTES.favorites}/${item.favoriteId}`);

    item.favoriteId = null;
  } catch (error) {
    console.log('App. Add to favorite', error);
  }
};

const getFavorites = async () => {
  try {
    const { data } = await axios.get<ISneakersItem[]>(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.favorites}`,
    );

    items.value = items.value.map((item) => {
      const favorite = data.find((favoriteItem) => favoriteItem.productId === item.id);

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
  } catch (error) {
    console.log('App', error);
  }
};

const getSneakers = async () => {
  const params: ISearchParams = {
    sortBy: filters.sortBy,
  };

  if (filters.searchQuery) {
    params.title = `*${filters.searchQuery}*`;
  }

  try {
    const { data } = await axios.get<ISneakersItem[]>(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.sneakers}`,
      {
        params,
      },
    );

    items.value = data.map((item) => ({
      ...item,
      isFavorite: false,
      isAdded: false,
      favoriteId: null,
    }));
  } catch (error) {
    console.log('App', error);
  }
};

onMounted(async () => {
  await getSneakers();
  await getFavorites();
});

watch(filters, getSneakers);

provide('cartActions', {
  onCloseDrawer,
  onOpenDrawer,
});
</script>

<template>
  <MainDrawer v-if="isDrawerOpen" />

  <div class="w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <MainHeader @on-open-drawer="onOpenDrawer" />

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

      <CardElementList :items="items" @on-add-to-favorite="onAddToFavorite" />
    </div>
  </div>
</template>
