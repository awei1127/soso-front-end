<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!--這裡就是最外層 最上層 最父的地方 僅次於body-->
  <!--我可以在這裡做一個像是推特專案的layout main的模板 也就是所有頁面都會用到的模板 像是Navbar-->
  <!--接著從這裡開始就按照路由來顯示頁面 也就是RouterView-->
  <RouterView />
  <!--這邊放個footer-->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
