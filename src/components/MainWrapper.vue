<script setup>
import CategorySection from './CategorySection.vue'
import ProductSection from './ProductSection.vue'
</script>

<template>
  <div class="d-flex">
    <!--分類區塊-->
    <CategorySection />
    <div class="flex-fill">
      <!--廣告Banner區塊 (如果有)-->
      <!--產品區塊-->
      <ProductSection />
    </div>
  </div>
</template>
