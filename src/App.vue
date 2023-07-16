<script setup>
import { RouterView } from 'vue-router'
import NavbarWrapper from './components/NavbarWrapper.vue'
import FooterWrapper from './components/FooterWrapper.vue'
</script>

<template>
  <!--Navbar-->
  <NavbarWrapper />
  <!--按路由顯示頁面-->
  <RouterView />
  <!--頁尾區塊-->
  <FooterWrapper />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  /*outline: 1px solid tomato;*/
}
</style>
