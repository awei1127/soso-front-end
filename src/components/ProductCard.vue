<script setup>
defineProps({
  product: {
    type: Object
  }
})
</script>

<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" alt="product image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-truncate">{{ product.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>＄{{ product.price }}</div>
        <div v-if="product.stock > 0">
          <a href="#" class="btn btn-outline-primary">加入購物車</a>
        </div>
        <div v-else>
          <a class="btn btn-outline-primary disabled">沒有庫存</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 15rem;
  margin: 0.6rem 0.5rem 0 0.5rem;
}
</style>