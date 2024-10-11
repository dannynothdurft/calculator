import { reactive, readonly } from 'vue'

interface CalculatorState {
  input: string
  sum: string
}

const state = reactive<CalculatorState>({
  input: '',
  sum: ''
})

type MutationKey = keyof CalculatorState

const mutations = {
  updateValue<T extends MutationKey>(key: T, value: CalculatorState[T]) {
    state[key] = value
  }
}

export default {
  state: readonly(state),
  mutations
}
