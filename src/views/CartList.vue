<script setup>
import HeaderWrapper from '../components/HeaderWrapper.vue'
import CartWrapper from '../components/CartWrapper.vue'
</script>

<template>
  <main class="cart-list container-xxl">
    <!--logo+搜尋條的大區塊-->
    <HeaderWrapper>
      <div class="ms-5">
        <h1>購物車</h1>
      </div>
    </HeaderWrapper>
    <CartWrapper />
  </main>
</template>

<style scoped>
.cart-list {
  background-color: rgba(225, 247, 255, 0.7);
  min-height: 90vh;
}

h1 {
  color: rgb(255, 123, 0);
}
</style>