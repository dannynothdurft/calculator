<template>
  <div class="action-view">
    <button
      v-for="button in Config.actions"
      :key="button.id"
      class="action-button"
      :style="{ backgroundColor: button.color }"
      @click="handleClick(button.action)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import Config from '../config/app.json'
import Store from '../stores/CalculatorStore'
import { computed } from 'vue'

const input = computed(() => Store.state.input)

const calculate = (expression) => {
  console.log(expression)
  const sanitizedExpression = expression.replace(/\s+/g, '')
  return eval(sanitizedExpression)
}

const handleClick = (handler) => {
  if (handler === 'reset') return reset()
  if (handler === 'back') return back()
  if (handler === 'calc') return Store.mutations.updateValue('sum', calculate(input.value))

  if (
    (handler === ' % ' ||
      handler === ' / ' ||
      handler === ' * ' ||
      handler === ' - ' ||
      handler === ' + ' ||
      handler === '.') &&
    input.value === ''
  )
    return

  Store.mutations.updateValue('input', input.value + handler)
}

const reset = () => {
  Store.mutations.updateValue('input', '')
  Store.mutations.updateValue('sum', '')
}

const back = () => {
  if (input.value.slice(-1) === ' ') {
    Store.mutations.updateValue('input', input.value.slice(0, -3))
  } else {
    Store.mutations.updateValue('input', input.value.slice(0, -1))
  }
}
</script>

<style scoped>
.action-view {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: center;
}

.action-button {
  border: unset;
  width: 50px;
  height: 50px;
  font-size: 1.4em;
  color: #fff;
  border-radius: 50%;
}

.action-button:hover {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.2);
}

.action-button:active {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);
}
</style>
