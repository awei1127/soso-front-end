<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const sortBy = ref(route.query.sortBy)
const lowestPrice = ref(null)
const highestPrice = ref(null)
const submitPrice = () => {
  router.push({
    path: '/products',
    query: {
      ...route.query,
      lowestPrice: lowestPrice.value,
      highestPrice: highestPrice.value
    }
  })
}

const setSortBy = (value) => {
  sortBy.value = value
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light filter-bar">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link disabled">篩選</a>
        </li>
        <li class="nav-item" :class="{ active: sortBy === 'newest' }" @click="setSortBy('newest')">
          <router-link :to="{ path: '/products', query: { ...route.query, sortBy: 'newest' } }" class="nav-link">
            最新
          </router-link>
        </li>
        <li v-if="sortBy === 'lowestPrice'" class="nav-item active" @click="setSortBy('highestPrice')">
          <router-link :to="{ path: '/products', query: { ...route.query, sortBy: 'highestPrice' } }" class="nav-link">
            價格<i class="fa-solid fa-arrow-up"></i>
          </router-link>
        </li>
        <li v-else-if="sortBy === 'highestPrice'" class="nav-item active" @click="setSortBy('lowestPrice')">
          <router-link :to="{ path: '/products', query: { ...route.query, sortBy: 'lowestPrice' } }" class="nav-link">
            價格<i class="fa-solid fa-arrow-down"></i>
          </router-link>
        </li>
        <li v-else class="nav-item" @click="setSortBy('lowestPrice')">
          <router-link :to="{ path: '/products', query: { ...route.query, sortBy: 'lowestPrice' } }" class="nav-link">
            價格<i class="fa-solid fa-arrows-up-down"></i>
          </router-link>
        </li>
        <form class="nav-item d-flex" @submit.prevent="submitPrice">
          <input v-model="lowestPrice" type="text" class="form-control ms-2" placeholder="最低價">
          <input v-model="highestPrice" type="text" class="form-control ms-2" placeholder="最高價">
          <button class="btn" type="submit">確認</button>
        </form>
      </ul>
      <!--這裡可以加個簡易分頁器-->
    </div>
  </nav>
</template>

<style scoped>
.filter-bar {
  background-color: #ececec;
}

.form-control {
  width: 5rem;
}

input::placeholder {
  color: rgb(192, 192, 192);
}

.active {
  background-color: rgb(176, 237, 237);
}

button {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
}
</style>