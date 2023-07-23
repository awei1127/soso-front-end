<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import axios from 'axios'

defineProps({
  product: {
    type: Object
  }
})

const cartItemData = ref(null)
const cartItemStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

// 定義函數：添加購物車物品
async function addCartItem(productId) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_HOST}/api/v1/cart/${productId}`, {}, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      cartItemData.value = response.data.data
      cartItemStatus.value = 'success'
      alert('已成功新增到購物車')
    } else { // 若狀態為失敗，將響應式物件的值設為error
      cartItemStatus.value = 'error'
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    cartItemStatus.value = 'error'
    console.error(err)
  }
}

</script>

<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" alt="product image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-truncate">{{ product.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>＄{{ product.price }}</div>
        <div v-if="product.stock <= 0">
          <a class="btn btn-outline-primary disabled">沒有庫存</a>
        </div>
        <div v-else-if="userToken">
          <a @click="addCartItem(product.id)" class="btn btn-outline-primary">加入購物車</a>
        </div>
        <div v-else>
          <a class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signInModal">加入購物車</a>
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