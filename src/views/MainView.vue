<script setup>
import HeaderWrapper from '../components/HeaderWrapper.vue'
import MainWrapper from '../components/MainWrapper.vue'
</script>

<template>
  <main class="main-view container-xxl">
    <!--logo+搜尋條的大區塊-->
    <HeaderWrapper />
    <!--分類+商品的大區塊-->
    <MainWrapper />
  </main>
</template>

<style scoped>
.main-view {
  background-color: rgba(225, 247, 255, 0.7);
}
</style>