<template>
  <div class="list">
    <div class="placement">
      <div class="text">
        <input type="text" @keyup.enter="addtask" />
      </div>
      <div class="button">
        <button>リストを追加</button>
        <button @click="onClickCloseList">&#8569;</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapMutations } from 'vuex'
export default {
  methods: {
    addtask(e) {
      this.$store.commit('tasks/add', e.target.value)
      console.log(e.target.value)
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
