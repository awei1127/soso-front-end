<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const userData = ref(null)
const userStatus = ref('')

onMounted(() => {
  // 取得使用者資料 (待補上檢查使用者是否已登入的邏輯 沒登入就不用fetch了)
  fetchUser()
})

// 定義函數：取得使用者資料
async function fetchUser() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/user`)
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      userData.value = response.data.data
      userStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      userStatus.value = 'error'
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    userStatus.value = 'error'
    console.error(err)
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-wrapper">
    <div class="container-xxl">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/products">回首頁</a>
          </li>
          <li v-if="userStatus === 'success' && userData.role === 'seller'" class="nav-item">
            <a class="nav-link">賣家中心</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="userStatus === 'success'" class="nav-item">
            <a class="nav-link" href="/cart">購物車</a>
          </li>
          <li v-else class="nav-item">
            <!--這個購物車要顯示登入modal-->
            <a class="nav-link" href="#">購物車#</a>
          </li>
          <li v-if="userStatus !== 'success'" class="nav-item">
            <a class="nav-link">登入</a>
          </li>
          <li v-if="userStatus !== 'success'" class="nav-item">
            <a class="nav-link">註冊</a>
          </li>
          <li v-if="userStatus === 'success'" class="nav-item">
            <a class="nav-link">登出</a>
          </li>
          <li v-if="userStatus === 'success'" class="nav-item">
            <a class="nav-link">{{ userData.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-wrapper {
  background-color: #ececec;
}
</style>