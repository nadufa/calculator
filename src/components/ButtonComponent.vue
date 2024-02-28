<template>
  <div class="ButtonWrap">
    <button class="Button" @click="updateResultValue(valueForButton)">{{ valueForButton }}</button>
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
  height: 70px;
  width: 70px;
  font-size: 25px;
}
</style>
