<script setup>
import ShopWrapper from '../components/ShopWrapper.vue'
</script>

<template>
  <main class="shop-list container-xxl">
    <ShopWrapper />
  </main>
</template>

<style scoped>
.shop-list {
  background-color: rgba(225, 247, 255, 0.7);
  min-height: 90vh;
}

.header-wrapper {
  height: 8rem;
}

h1 {
  color: rgb(255, 123, 0);
}
</style>