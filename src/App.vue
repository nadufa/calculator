<template>
  <div class="wrapper">
    <ResultField :result='returnResultValue()'/>
    <MyButtons :updateResultValue="updateResultValue" :valuesForButton='state.valuesForButton'/>
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
  },
  data() {
    return {
      state: {
        resultArray: ['0'],
        valuesForButton: [
          [
            {
              valueForButton: 'AC'
            },
            {
              valueForButton: '+/-'
            },
            {
              valueForButton: '%'
            },
            {
              valueForButton: '/'
            },
          ],
          [

            {
              valueForButton: '7'
            },
            {
              valueForButton: '8'
            },
            {
              valueForButton: '9'
            },
            {
              valueForButton: '*'
            },
          ],
          [

            {
              valueForButton: '4'
            },
            {
              valueForButton: '5'
            },
            {
              valueForButton: '6'
            },
            {
              valueForButton: '-'
            },
          ],
          [

            {
              valueForButton: '1'
            },
            {
              valueForButton: '2'
            },
            {
              valueForButton: '3'
            },
            {
              valueForButton: '+'
            },
          ],
          [
            {
              valueForButton: 'TH'
            },
            {
              valueForButton: '0'
            },
            {
              valueForButton: ','
            },
            {
              valueForButton: '='
            },
          ],
        ]
      }
    }
  },
  methods: {
    returnResultValue() {
      return this.state.resultArray.join('')
    },
    updateResultValue(newSign) {
      console.log(newSign)
      this.state.resultArray.push(newSign)
      this.returnResultValue()
    },
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
