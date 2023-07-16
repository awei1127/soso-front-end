<script setup>
import FilterBar from './FilterBar.vue'
import ProductCard from './ProductCard.vue'
import PaginationBar from './PaginationBar.vue'
</script>

<template>
  <!--篩選條-->
  <FilterBar />
  <!--產品列表-->
  <div class="d-flex flex-wrap">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
  <!--分頁器-->
  <PaginationBar />
</template>