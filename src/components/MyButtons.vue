<template>
  <div class="myButtons">
    <div class="line">
      <button class="button">AC</button>
      <button class="button">+/-</button>
      <button class="button">%</button>
      <button class="button">/</button>
    </div>
    <div class="line">
      <button class="button">7</button>
      <button class="button">8</button>
      <button class="button">9</button>
      <button class="button">x</button>
    </div>
    <div class="line">
      <button class="button">4</button>
      <button class="button">5</button>
      <button class="button">6</button>
      <button class="button">-</button>
    </div>
    <div class="line">
      <button class="button">1</button>
      <button class="button">2</button>
      <button class="button">3</button>
      <button class="button">+</button>
    </div>
    <div class="line">
      <button class="button">TH</button>
      <button class="button">0</button>
      <button class="button">,</button>
      <button class="button">=</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyButtons',
  props: {
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.myButtons {
  padding: 5px;
  background-color: #dbafff;
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.line {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.button {
  height: 70px;
  width: 70px;
  font-size: 25px;
}
</style>
