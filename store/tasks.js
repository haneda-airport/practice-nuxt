export const state = () => ({
  list: [],
})

export const mutation = {
  task(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
}
