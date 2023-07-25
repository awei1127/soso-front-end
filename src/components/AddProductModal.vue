<script setup>
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
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">商品名稱</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">商品描述</label>
              <input type="text" class="form-control" id="description">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">商品類別</label>
              <input type="text" class="form-control" id="category">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">商品價格</label>
              <input type="number" class="form-control" id="price">
            </div>
            <div class="mb-3">
              <label for="stock" class="form-label">商品數量</label>
              <input type="number" class="form-control" id="stock">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="isPublic">
              <label class="form-check-label" for="isPublic">直接上架</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">確定新增</button>
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
