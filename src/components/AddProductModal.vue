<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const emit = defineEmits(['fetchShopItems'])

const categoriesData = ref(null)
const categoriesStatus = ref('')
const store = useStore()
const userToken = computed(() => store.state.userToken)

const name = ref(null)
const description = ref(null)
const categoryId = ref(null)
const price = ref(null)
const stock = ref(null)
const isPublic = ref(true)
let selectedFile = null

onMounted(() => {
  // 取得分類資料
  fetchCategories()
})

// 定義函數：取得分類資料
async function fetchCategories() {
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
}

// 定義函數：送出新增商品表單
async function submitForm() {
  try {
    // 將使用者輸入的資料打包成FormData
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('description', description.value)
    formData.append('categoryId', categoryId.value)
    formData.append('price', price.value)
    formData.append('stock', stock.value)
    formData.append('isPublic', isPublic.value)
    formData.append('image', selectedFile)
    // 發送打包好的formData
    const response = await axios.post(`${import.meta.env.VITE_HOST}/api/v1/shop`, formData, {
      headers: {
        Authorization: 'Bearer ' + userToken.value,
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response.data.status === 'success') {
      emit('fetchShopItems')
      alert('已成功新增商品')
    } else {
      alert(response.data.message)
    }
  } catch (err) {
    console.error(err)
  }
}

// 定義函數：取得使用者上傳的檔案
function handleFileUpload(event) {
  selectedFile = event.target.files[0]
}

</script>

<template>
  <!-- button -->
  <div class="ms-auto">
    <button type="button" class="btn btn-primary me-5 add-btn" data-bs-toggle="modal" data-bs-target="#addProductModal">
      <h4>新增商品</h4>
    </button>
  </div>
  <!-- modal -->
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">新增商品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- form -->
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">商品名稱</label>
              <input v-model="name" type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">商品描述</label>
              <input v-model="description" type="text" class="form-control" id="description">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">商品類別</label>
              <select v-model="categoryId" class="form-select mb-3" id="category">
                <option selected>選擇分類...</option>
                <option v-for="category in categoriesData" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">商品價格</label>
              <input v-model="price" type="number" class="form-control" id="price">
            </div>
            <div class="mb-3">
              <label for="stock" class="form-label">商品數量</label>
              <input v-model="stock" type="number" class="form-control" id="stock">
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">商品圖片</label>
              <input @change="handleFileUpload" class="form-control" type="file" id="formFile">
            </div>
            <div class="mb-3 form-check">
              <input v-model="isPublic" type="checkbox" class="form-check-input" id="isPublic">
              <label class="form-check-label" for="isPublic">直接上架</label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
              <button type="submit" class="btn btn-primary">確定新增</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-btn {
  height: 4rem;
  width: 8rem;
}
</style>
