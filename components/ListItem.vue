<template>
  <div>
    <button v-on:click="onClickButton">＋リストを追加</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickButton() {
      console.log('Hello')
    },
  },
}
</script>

<style scoped></style>
