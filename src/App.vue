<template>
  <div class="wrapper">
    <ResultField result="123" />
    <MyButtons value="8"/>
  </div>
</template>

<script>
import MyButtons from './components/MyButtons.vue'
import ResultField from "@/components/ResultField.vue";

export default {
  name: 'App',
  components: {
    ResultField,
    MyButtons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  background-color: yellow;
  height: 500px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
