<template>
  <div class="all">
    <div class="list">
      <div class="placement">
        <ul>
          <li v-for="(task, idx) in tasks" :key="idx">
            <p>{{ task.text }}</p>
          </li>
          <li v-for="(task2, idx) in tasks2" :key="idx">
            <p>{{ task2.text }}</p>
          </li>
        </ul>
        <div class="text">
          <input type="text" @keyup.enter="addtask2" />
        </div>
        <div class="button">
          <button>カードを追加</button>
          <button @click="onClickCloseCard">&#8569;</button>
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
    addtask2(e) {
      this.$store.commit('tasks2/add', e.target.value)
      console.log(e.target.value)
    },
  },
  // props: {
  //   onClickCloseLast: {
  //     type: Function,
  //   },
  // },
  props: {
    onClickCloseCard: {
      type: Function,
    },
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.list
    },
  },
  computed: {
    tasks2() {
      return this.$store.state.tasks2.list
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
  height: 100%;
  background-color: gray;
  display: inline-block;
}
.plus {
  display: inline-block;
}
ul {
  list-style: none;
}
p {
  text-align: left;
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
