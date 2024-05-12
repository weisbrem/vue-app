<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import InfoBlock from '../components/InfoBlock.vue';

import { API_ROUTES } from '../constants/api';
import CardElementList from '../components/CardElementList.vue';

const favorites = ref([]);

const getFavorites = async () => {
  try {
    const { data } = await axios.get(
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
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

  <InfoBlock
    v-if="!favorites.length"
    imageUrl="/emoji-1.png"
    title="Закладок нет :("
    description="Вы ничего не добавляли в закладки"
  />

  <CardElementList :items="favorites" is-favorites />
</template>
