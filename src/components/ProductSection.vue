<script setup>
import FilterBar from './FilterBar.vue'
import ProductCard from './ProductCard.vue'
import PaginationBar from './PaginationBar.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const productsData = ref(null)
const productsStatus = ref('')

onMounted(async () => {
  // 取得商品資料
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/products`)
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      productsData.value = response.data.data
      productsStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      productsStatus.value = 'error'
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    productsStatus.value = 'error'
    console.error(err)
  }
})

</script>

<template>
  <!--篩選條-->
  <FilterBar />
  <!--產品列表-->
  <div v-if="productsStatus === 'success'" class="d-flex flex-wrap">
    <ProductCard v-for="product in productsData" :key="product.id" :product="product" />
  </div>
  <div v-else>
    An error occurred.
  </div>
  <!--分頁器-->
  <PaginationBar />
</template>