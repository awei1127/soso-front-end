<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import SignInModal from './SignInModal.vue'
import { useStore } from 'vuex'

const userData = ref(null)
const userStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

onMounted(() => {
  // 取得使用者資料 (如果vuex store中的userToken有值)
  if (userToken.value) {
    fetchUser()
  }
})

// 定義函數：取得使用者資料
async function fetchUser() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/user`, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
      }
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      userData.value = response.data.data
      userStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      userStatus.value = 'error'
      logout()
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    userStatus.value = 'error'
    logout()
    console.error(err)
  }
}

// 定義函數：登出
function logout() {
  store.commit('SET_USER_TOKEN', '')
  localStorage.removeItem('userToken')
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
          <li v-if="userToken && userData && userData.role === 'seller'" class="nav-item">
            <a class="nav-link">賣家中心</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="userToken" class="nav-item">
            <a class="nav-link" href="/cart">購物車</a>
          </li>
          <li v-else class="nav-item">
            <!--這個購物車要顯示登入modal-->
            <a class="nav-link" data-bs-toggle="modal" data-bs-target="#signInModal">購物車</a>
          </li>
          <li v-if="!userToken" class="nav-item" data-bs-toggle="modal" data-bs-target="#signInModal">
            <a class="nav-link">登入</a>
          </li>
          <li v-if="!userToken" class="nav-item">
            <a class="nav-link">註冊</a>
          </li>
          <li v-if="userToken" @click="logout" class="nav-item">
            <a class="nav-link">登出</a>
          </li>
          <li v-if="userToken && userData" class="nav-item">
            <a class="nav-link">{{ userData.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <SignInModal />
</template>

<style scoped>
.navbar-wrapper {
  background-color: #ececec;
}

a {
  cursor: pointer;
}
</style>