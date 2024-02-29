<template>
  <div class="myButtons">
    <div class="line" v-for="(line, index) in valuesForButton" :key="index">
      <ButtonComponent v-for="(buttonObj, index) in line"  :key="index" :updateResultValue="updateResultValue" :valueForButton="buttonObj.valueForButton"/>
    </div>
  </div>
</template>

<script>

import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: 'MyButtons',
  props: {
    valuesForButton: Array,
    ['updateResultValue']: Function,
  },
  components: {
    ButtonComponent
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
  background-color: rgba(219, 175, 255, 0.5);
  border-radius: 5px;
  height: 73%;
  width: 98%;
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
</style>
