<template>
  <div class="list">
    <div class="placement">
      <div class="text">
        <input type="text" />
      </div>
      <div class="button">
        <button>リストを追加</button>
        <button @click="onClickCloseList">&#8569;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
