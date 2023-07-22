<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const categoriesData = ref(null)
const categoriesStatus = ref('')

onMounted(async () => {
  // 取得分類資料
  try {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/categories`)
    if (response.data.status === 'success') { // 若狀態為成功，將取得的資料交給響應式物件
      categoriesData.value = response.data.data
      categoriesStatus.value = 'success'
    } else { // 若狀態為失敗，將響應式物件的值設為error
      categoriesStatus.value = 'error'
    }
  } catch (err) { // 若有錯誤，將響應式物件的值設為error
    categoriesStatus.value = 'error'
    console.error(err)
  }
})

</script>

<template>
  <div class="category-section me-3">
    <ul v-if="categoriesStatus === 'success'" class="nav flex-column">
      <li>
        <a class="nav-link disabled">全站分類</a>
      </li>
      <li v-for="category in categoriesData" class="nav-item" :key="category.id" :category="category">
        <router-link :to="{ path: '/products', query: { categoryId: category.id } }" class="nav-link">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
    <div v-else>
      An error occurred.
    </div>
  </div>
</template>

<style scoped>
.category-section {
  min-width: 16rem;
  font-size: 1.2rem;
  border-radius: 0.375rem;
  outline: 1px solid gainsboro;
}

.nav-item:hover {
  background-color: rgb(176, 237, 237);
}

.active {
  background-color: rgb(176, 237, 237);
}
</style>