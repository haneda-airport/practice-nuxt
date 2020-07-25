<template>
  <div>
    <last v-if="isCardOpen" :on-click-close-card="onClickCloseCard" />
    <div v-else class="list">
      <div class="placement">
        <div class="text">
          <input type="text" @input="addtask" />
        </div>
        <div class="button">
          <button @click="onClickCard">リストを追加</button>
          <button @click="onClickCloseList">&#8569;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      isCardOpen: false,
    }
  },
  methods: {
    addtask(e) {
      this.$store.commit('tasks/add', e.target.value)
      // console.log('e.target.value')
    },
    onClickCard() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isCardOpen = true
      // console.log('click!')
    },
    onClickCloseCard() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isCardOpen = false
      //   console.log(this.isListOpen)
    },
  },
  props: {
    onClickCloseList: {
      type: Function,
    },
  },
}
</script>

<style scoped>
.list {
  flex-wrap: wrap;
  margin: auto;
  width: 270px;
  height: 70px;
  background-color: gray;
}
.text {
  margin-bottom: 10px;
  text-align: left;
}
.button {
  display: flex;
  justify-content: left;
  margin: 10px;
}
</style>
