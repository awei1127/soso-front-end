<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import axios from 'axios'

defineProps({
  cartItem: {
    type: Object
  }
})

const emit = defineEmits(['fetchCartItems'])

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
      emit('fetchCartItems')
      alert('已成功新增到購物車')
    } else { // 若狀態為失敗，將響應式物件的值設為error
      cartItemStatus.value = 'error'
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    cartItemStatus.value = 'error'
    console.error(err)
  }
}

// 定義函數：改變購物車物品勾選狀態
async function toggleCartItem(cartItemId) {
  try {
    const response = await axios.put(`${import.meta.env.VITE_HOST}/api/v1/cart/${cartItemId}`, {}, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      emit('fetchCartItems')
      cartItemData.value = response.data.data
      cartItemStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      cartItemStatus.value = 'error'
    }
  } catch (err) {
    console.error(err)
  }
}

// 定義函數：刪除購物車物品
async function removeCartItem(cartItemId) {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_HOST}/api/v1/cart/${cartItemId}`, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，呼叫父組件重新取得購物車物品
      emit('fetchCartItems')
      cartItemStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      cartItemStatus.value = 'error'
    }
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <div class="card mb-3 d-flex flex-row justify-content-evenly align-items-center">
    <!--選取框-->
    <input :checked="cartItem.checked" @click="toggleCartItem(cartItem.id)" type="checkbox" class="form-check-input mx-3">
    <!--商品圖片-->
    <div class="img-frame">
      <img v-if="cartItem.Product.image" :src="cartItem.Product.image" class="img-fluid rounded-start"
        alt="product-image">
      <i v-else class="fa-solid fa-bag-shopping fa-2xl"></i>
    </div>
    <!--商品名稱 描述-->
    <div class="product-title mx-3">
      <h3 class="card-title">{{ cartItem.Product.name }}</h3>
      <p class="description">{{ cartItem.Product.description }}</p>
    </div>
    <!--金額-->
    <div class="price">
      <h3>單價：{{ cartItem.Product.price }}</h3>
    </div>
    <!--減號加號-->
    <div class="mx-3">
      <a @click="removeCartItem(cartItem.id)">
        <i class="fa-solid fa-square-minus fa-2xl me-2"></i>
      </a>
      <a @click="addCartItem(cartItem.Product.id)">
        <i class="fa-solid fa-square-plus fa-2xl me-2"></i>
      </a>
    </div>
    <!--移除-->
    <a @click="removeCartItem(cartItem.id)" class="mx-3">
      <h4>移除</h4>
    </a>
  </div>
</template>

<style scoped>
.img-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background-color: rgb(222, 222, 222);
}

.product-title {
  width: 30rem;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
}

.price {
  width: 12rem;
}

a {
  cursor: pointer;
}
</style>