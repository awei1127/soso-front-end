<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ShopItemCard from './ShopItemCard.vue'
import AddProductModal from '../components/AddProductModal.vue'
import SosoLogo from '../components/SosoLogo.vue'

const shopData = ref(null)
const shopStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

onMounted(() => {
  // 取得商品資料
  fetchShopItems()
})

// 定義函數：取得商品資料
async function fetchShopItems() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/shop`, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      shopData.value = response.data.data
      shopStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      shopStatus.value = 'error'
    }
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <div class="d-flex align-items-center header-wrapper">
    <SosoLogo />
    <div class="ms-5">
      <h1>賣家中心</h1>
    </div>
    <AddProductModal @fetchShopItems="fetchShopItems" />
  </div>
  <div>
    <!--商品清單-->
    <ShopItemCard v-for="shopItem in shopData" :key="shopItem.id" :shopItem="shopItem" @fetchShopItems="fetchShopItems" />
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

.shop-list {
  background-color: rgba(225, 247, 255, 0.7);
  min-height: 90vh;
}

.header-wrapper {
  height: 8rem;
}

h1 {
  color: rgb(255, 123, 0);
}
</style>