<template>
  <div>
    <last v-if="isLastOpen" :on-click-close-last="onClickCloseLast" />
    <div v-else class="all">
      <div class="list">
        <div class="placement">
          <ul>
            <li v-for="(task, idx) in tasks" :key="idx">
              <p>{{ task.text }}</p>
            </li>
          </ul>
          <div class="button">
            <button @click="onClickLast">+カードを追加</button>
            <!-- <button @click="onClickCloseCard">&#8569;</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLastOpen: false,
    }
  },
  // props: {
  //   onClickCloseCard: {
  //     type: Function,
  //   },
  // },
  computed: {
    tasks() {
      return this.$store.state.tasks.list
    },
  },
  methods: {
    onClickLast() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isLastOpen = true
      // console.log('click!')
    },
    onClickCloseLast() {
      // console.log(this.isListOpen)
      // console.log('click!')
      this.isLastOpen = false
      //   console.log(this.isListOpen)
    },
  },
}
</script>

<style scoped>
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
