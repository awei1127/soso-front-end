<script setup>
import SosoLogo from './SosoLogo.vue'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="d-flex justify-content-between align-items-center header-wrapper">
    <SosoLogo />
    <slot></slot>
    <SearchBar />
  </div>
</template>

<style scoped>
.header-wrapper {
  height: 8rem;
}
</style>