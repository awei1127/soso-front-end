<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import axios from 'axios'

defineProps({
  shopItem: {
    type: Object
  }
})

const emit = defineEmits(['fetchShopItems'])

const shopItemData = ref(null)
const shopItemStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

// 定義函數：改變商品上架狀態
async function toggleShopItem(shopItemId) {
  try {
    const response = await axios.put(`${import.meta.env.VITE_HOST}/api/v1/shop/${shopItemId}`, {}, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      emit('fetchShopItems')
      shopItemData.value = response.data.data
      shopItemStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      shopItemStatus.value = 'error'
    }
  } catch (err) {
    console.error(err)
  }
}


</script>

<template>
  <div class="card mb-3 d-flex flex-row justify-content-evenly align-items-center"
    :class="{ private: !shopItem.isPublic }">
    <!--公開狀態-->
    <div class="mx-3">
      <h3 v-if="shopItem.isPublic" class="card-text">已上架</h3>
      <h3 v-else class="card-text">已下架</h3>
    </div>
    <!--商品圖片-->
    <div class="img-frame">
      <img v-if="shopItem.image" :src="shopItem.image" class="img-fluid rounded-start" alt="product-image">
      <i v-else class="fa-solid fa-bag-shopping fa-2xl"></i>
    </div>
    <!--商品名稱 描述-->
    <div class="product-title mx-3">
      <h3 class="card-title">{{ shopItem.name }}</h3>
      <p class="description">{{ shopItem.description }}</p>
    </div>
    <!--商品庫存-->
    <div class="mx-3">
      <h3 class="card-text" :class="{ lacking: shopItem.isPublic && shopItem.stock === 0 }">庫存：{{ shopItem.stock }}</h3>
    </div>
    <!--金額-->
    <div class="price">
      <h3 class="card-text">單價：{{ shopItem.price }}</h3>
    </div>
    <!--下架or上架-->
    <a @click="toggleShopItem(shopItem.id)" class="mx-3">
      <h4 v-if="shopItem.isPublic">下架</h4>
      <h4 v-else>上架</h4>
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

.private {
  background-color: rgb(212, 212, 212);
  color: rgb(127, 127, 127);
}

.lacking {
  color: rgb(164, 0, 0);
}

a {
  cursor: pointer;
}
</style>