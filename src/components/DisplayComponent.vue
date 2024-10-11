<template>
  <div class="display-view">
    <p>{{ input || 0 }}</p>
    <p class="sum">{{ sum }}</p>
  </div>
</template>

<script setup lang="ts">
import Store from '../stores/CalculatorStore'
import { computed } from 'vue'

const input = computed(() => Store.state.input)
const sum = computed(() => Store.state.sum)
</script>

<style scoped>
.display-view {
  height: 60px;
  position: absolute;
  bottom: 320px;
  right: 20px;
  text-align: right;
  font-size: 1.2em;
}

.sum {
  font-size: 1.4em;
}
</style>
