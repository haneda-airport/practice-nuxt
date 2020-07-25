<template>
  <div class="all">
    <div class="list">
      <div class="placement">
        <ul>
          <li v-for="(task, idx) in tasks" :key="idx">
            <p>{{ task.text }}</p>
          </li>
        </ul>
        <div class="text">
          <input type="text" @keyup.enter="addtask" />
        </div>
        <div class="button">
          <button>+カードを追加</button>
          <button @click="onClickCloseLast">&#8569;</button>
        </div>
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
    onClickCloseLast: {
      type: Function,
    },
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.list
    },
  },
}
</script>

<style>
.all {
  text-align: center;
}
.list {
  flex-wrap: wrap;
  margin: auto;
  width: 270px;
  height: 70px;
  background-color: gray;
  display: inline-block;
}
.plus {
  display: inline-block;
}
li {
  margin-bottom: 10px;
  text-align: left;
}
.button {
  display: flex;
  justify-content: left;
  margin: 10px;
}
</style>
