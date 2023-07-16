<script setup>

</script>

<template>
  <div class="card">
    <img src="https://loremflickr.com/320/320/restaurant,food/?random={{ Math.random() * 100 }}" class="card-img-top"
      alt="...">
    <div class="card-body">
      <h5 class="card-title">我是商品名稱</h5>
      <p class="card-text">Some quick example text to build on the card.
      </p>
      <a href="#" class="btn btn-outline-primary">加入購物車</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 15rem;
  margin: 0.6rem 0.5rem 0 0.5rem;
}
</style>