<template>
  <div class="ButtonWrap">
    <button :class="['Button', { 'Zero': valueForButton === '0' }]" @click="updateResultValue(valueForButton)">{{ valueForButton }}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    valueForButton: String,
    ['updateResultValue']: Function,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ButtonWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Button {
  height: 60px;
  width: 70px;
  font-size: 30px;
  background-color: #f8f9ff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.Zero {
  width: 147px;
}

.Button:hover {
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}

.Button:active {
  background-color: #ededff;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}
</style>
