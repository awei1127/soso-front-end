<template>
  <div class="category-section me-3">
    <ul class="nav flex-column">
      <li>
        <a class="nav-link disabled">全站分類</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">家電</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">手機</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">電腦</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">保健</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">食品</a>
      </li>
    </ul>
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