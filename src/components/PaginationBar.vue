<template>
  <nav class="pagination-bar" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination-bar {
  margin-top: 0.6rem;
}
</style>