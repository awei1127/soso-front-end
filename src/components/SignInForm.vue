<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useStore } from 'vuex'

const account = ref('')
const password = ref('')
const store = useStore()

// 定義函數：送出登入資訊
async function signIn() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_HOST}/api/v1/signin`, {
      account: account.value,
      password: password.value
    })
    if (response.data.status === 'success') { // 若狀態為成功，將取得的token儲存到Vuex store
      store.commit('SET_USER_TOKEN', response.data.data.token)
      console.log('signin success')
    } else { // 若狀態為失敗，打印訊息
      console.log('signin failure')
    }
  } catch (err) { // 若有錯誤，打印訊息
    console.error(err)
  }
}

</script>

<template>
  <form @submit.prevent="signIn">
    <div class="mb-3">
      <label for="inputAccount" class="form-label">帳號</label>
      <input v-model="account" type="text" class="form-control" id="inputAccount" aria-describedby="accountHelp"
        placeholder="輸入帳號...">
      <div v-if="signInStatus !== 'success'" id="accountHelp" class="form-text">帳號或密碼錯誤</div>
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">密碼</label>
      <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="輸入密碼...">
    </div>
    <button type="submit" class="btn btn-primary">登入</button>
  </form>
</template>