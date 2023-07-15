<script setup>
</script>

<template>
  <!-- button -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productAddingModal">
    新增商品
  </button>
  <!-- modal -->
  <div class="modal fade" id="productAddingModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
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
              <label for="category" class="form-label">商品類別</label>
              <input type="text" class="form-control" id="category">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">商品價格</label>
              <input type="text" class="form-control" id="price">
            </div>
            <div class="mb-3">
              <label for="stock" class="form-label">商品數量</label>
              <input type="text" class="form-control" id="stock">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="public">
              <label class="form-check-label" for="public">直接上架</label>
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

<style scoped></style>
