<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  cartData: {
    type: Array
  }
})

const emit = defineEmits(['fetchCartItems'])

const store = useStore()
const userToken = computed(() => store.state.userToken)
const totalPrice = computed(() => {
  let sum = 0
  for (const cartItem of props.cartData) {
    if (cartItem.checked) {
      sum += cartItem.Product.price
    }
  }
  return sum
})
const checkedAmount = computed(() => {
  let amount = 0
  for (const cartItem of props.cartData) {
    if (cartItem.checked) {
      amount++
    }
  }
  return amount
})

// 定義函數：送出結帳請求
async function addOrder() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_HOST}/api/v1/order`, {}, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      emit('fetchCartItems')
      alert('已成功新增訂單')
    } else { // 顯示錯誤訊息(庫存不足)
      alert(response.data.message)
    }
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <div class="navbar mb-3 d-flex flex-row justify-content-end align-items-center checkout-card">
    <!--全選框 <input type="checkbox" class="form-check-input mx-3"> -->
    <!--總金額-->
    <div class="price me-5">
      <h3>總金額：{{ totalPrice }}</h3>
    </div>
    <!--結帳-->
    <button @click="addOrder" type="button" class="btn btn-primary me-5">結帳({{ checkedAmount }})</button>
  </div>
</template>

<style scoped>
.checkout-card {
  background-color: rgb(176, 237, 237);
}

.price {
  width: 12rem;
  color: rgb(164, 0, 0);
}
</style>