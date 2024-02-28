<template>
  <div class="ResultFieldWrap">
    <div class="ResultField">
      <h1 class="Result">123</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultField',
  props: {
    result: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.ResultFieldWrap {
  background-color: peachpuff;
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ResultField {
  background-color: #b9fff9;
  height: 70%;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
}
.Result {
  font-size: 40px;
}
</style>
