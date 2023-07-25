<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ShopItemCard from './ShopItemCard.vue'

const shopData = ref(null)
const shopStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

onMounted(() => {
  // 取得購物車物品資料
  fetchShopItems()
})

// 定義函數：取得購物車物品資料
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
  <div>
    <!--購物車物品清單-->
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
</style>