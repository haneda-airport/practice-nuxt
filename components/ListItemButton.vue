<template>
  <div>
    <TopicTitle v-if="isListOpen" :on-click-close-list="onClickCloseList" />
    <button v-else @click="onClickButton">＋リストを追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListOpen: false,
    }
  },
  methods: {
    onClickButton() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isListOpen = true
      //   console.log(this.isListOpen)
    },
    onClickCloseList() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isListOpen = false
      // console.log(this.isListOpen)
    },
  },
}
</script>

<style scoped></style>
