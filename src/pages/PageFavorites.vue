<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

import type { ISneakersItem, IFavoriteItem } from '@/types/sneakers.types';
import { API_ROUTES } from '@/constants/api';
import CardElementList from '@/components/CardElementList.vue';

const favorites = ref<ISneakersItem[]>([]);

const getFavorites = async () => {
  try {
    const { data } = await axios.get<IFavoriteItem[]>(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.favorites}?_relations=items`,
    );

    favorites.value = data.map(({ item }) => item);
  } catch (error) {
    console.log('Favorites', error);
  }
};

onMounted(getFavorites);
</script>

<template>
  <h2 class="text-3xl font-bold">Мои закладки</h2>

  <CardElementList :items="favorites" is-favorites />
</template>
