<script setup>
import SignInForm from './SignInForm.vue'

</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">登入</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <SignInForm />
        </div>
      </div>
    </div>
  </div>
</template>