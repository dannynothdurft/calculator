<template>
  <div class="app-view">
    <DisplayComponent />
    <ActionComponent />
  </div>
</template>

<script setup lang="ts">
import DisplayComponent from './components/DisplayComponent.vue'
import ActionComponent from './components/ActionComponent.vue'
</script>

<style scoped>
.app-view {
  height: 100vh;
  background-color: #1c1c1c;
  position: relative;

  color: #fff;
}
</style>
