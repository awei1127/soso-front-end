<script setup>
import SosoLogo from './SosoLogo.vue'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="d-flex justify-content-between header-wrapper">
    <SosoLogo />
    <SearchBar />
  </div>
</template>

<style scoped>
.header-wrapper {
  height: 10rem;
}
</style>