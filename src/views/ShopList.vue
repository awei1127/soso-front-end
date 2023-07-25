<script setup>
import AddProductModal from '../components/AddProductModal.vue'
import ShopWrapper from '../components/ShopWrapper.vue'
import SosoLogo from '../components/SosoLogo.vue'
</script>

<template>
  <main class="shop-list container-xxl">
    <div class="d-flex align-items-center header-wrapper">
      <SosoLogo />
      <div class="ms-5">
        <h1>賣家中心</h1>
      </div>
      <AddProductModal />
    </div>
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