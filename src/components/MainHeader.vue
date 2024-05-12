<script setup>
import { AppRoutes } from '../constants/appRoutes';

defineProps({
  totalCartPrice: Number,
});

const emit = defineEmits(['onOpenDrawer']);
</script>

<template>
  <header class="flex justify-between items-center border-b border-slate-100 px-10 py-8">
    <router-link :to="AppRoutes.Home">
      <div class="flex items-center gap-4">
        <img class="w-10" src="/logo.png" alt="Логотип магазина" />

        <p class="inline-flex flex-col text-xl font-bold uppercase">
          Vue Sneakers
          <span class="font-normal text-sm normal-case text-slate-400"
            >Магазин лучших кросовок</span
          >
        </p>
      </div>
    </router-link>

    <nav>
      <ul class="flex items-center gap-x-8">
        <li>
          <button
            @click="emit('onOpenDrawer')"
            class="flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <img src="/cart.svg" alt="Иконка корзины" />
            <span>{{ totalCartPrice }} руб.</span>
          </button>
        </li>

        <router-link :to="AppRoutes.Favorites">
          <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
            <img src="/heart.svg" alt="Иконка закладок" />
            <p>Закладки</p>
          </li>
        </router-link>

        <router-link :to="AppRoutes.Profile">
          <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
            <img src="/profile.svg" alt="Иконка профиля" />
            <p>Профиль</p>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>
