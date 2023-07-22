<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light filter-bar">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link disabled">篩選</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">最新</a>
        </li>
        <li class="nav-item">
          <router-link :to="{ path: '/products', query: { ...route.query, sortBy: 'lowprice' } }" class="nav-link">
            價格<i class="fa-solid fa-arrows-up-down"></i>
          </router-link>
          <!--上箭頭<i class="fa-solid fa-arrow-up"></i>-->
          <!--下箭頭<i class="fa-solid fa-arrow-down"></i>-->
        </li>
        <li class="nav-item">
          <input type="text" class="form-control ms-2" placeholder="最低價">
        </li>
        <li class="nav-item">
          <input type="text" class="form-control ms-2" placeholder="最高價">
        </li>
        <li class="nav-item">
          <a class="nav-link">確認</a>
        </li>
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
</style>