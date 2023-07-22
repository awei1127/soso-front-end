<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchInput = ref('')
const submitSearch = () => {
  router.push({ path: '/products', query: { keyword: searchInput.value } })
}

</script>

<template>
  <form class="d-flex flex-fill search-bar" @submit.prevent="submitSearch">
    <input v-model="searchInput" class="form-control ms-5 me-2" placeholder="搜尋商品..." aria-label="Search">
    <button class="btn btn-primary search-btn me-4" type="submit">
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
    </button>
  </form>
</template>

<style scoped>
.search-bar {
  height: 3.5rem;
}

.search-btn {
  width: 6rem;
}
</style>