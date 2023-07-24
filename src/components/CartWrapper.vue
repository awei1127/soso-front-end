<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CartItemCard from './CartItemCard.vue'
import CheckoutCard from './CheckoutCard.vue'

const cartData = ref(null)
const cartStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

onMounted(() => {
  // 取得購物車物品資料
  fetchCartItems()
})

// 定義函數：取得購物車物品資料
async function fetchCartItems() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/cart`, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      cartData.value = response.data.data
      cartStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      cartStatus.value = 'error'
    }
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <div>
    <!--購物車物品清單-->
    <CartItemCard v-for="cartItem in cartData" :key="cartItem.id" :cartItem="cartItem" @fetchCartItems="fetchCartItems" />
    <!--結帳條-->
    <CheckoutCard v-if="cartData" :cartData="cartData" @fetchCartItems="fetchCartItems" />
  </div>
</template>

<style scoped>
.img-frame {
  width: 10rem;
  height: 10rem;
  background-color: gray;
}

.product-title {
  width: 30rem;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  width: 12rem;
}
</style>