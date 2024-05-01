<template>
  <header class="flex justify-between items-center border-b border-slate-300 px-10 py-8">
    <div class="flex items-center gap-4">
      <img class="w-10" src="/logo.png" alt="Логотип магазина" />

      <P class="inline-flex flex-col text-xl font-bold uppercase">
        Vue Sneakers
        <span class="font-normal text-sm normal-case text-slate-400">Магазин лучших кросовок</span>
      </P>
    </div>

    <nav>
      <ul class="flex items-center gap-x-8">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/cart.svg" alt="Иконка корзины" />
          <p>1205 руб.</p>
        </li>
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/heart.svg" alt="Иконка закладок" />
          <p>Закладки</p>
        </li>
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/profile.svg" alt="Иконка профиля" />
          <p>Профиль</p>
        </li>
      </ul>
    </nav>
  </header>
</template>
