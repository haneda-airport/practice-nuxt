<template>
  <div class="all">
    <div class="list">
      <div class="placement">
        <div class="text">
          <li v-for="(task, index) in tasks" :key="index">
            <span>{{ task.text }}</span>
          </li>
        </div>
        <div class="button">
          <button>+カードを追加</button>
          <button>&#8569;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
