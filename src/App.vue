<template>
  <div class="wrapper">
    <ResultField :result='state.resultArray.join("")'/>
    <MyButtons :updateResultValue="onButtonClick" :valuesForButton='state.valuesForButton'/>
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
          [{valueForButton: 'AC'}, {valueForButton: '+/-'}, {valueForButton: '%'}, {valueForButton: '/'},],
          [{valueForButton: '7'}, {valueForButton: '8'}, {valueForButton: '9'}, {valueForButton: '*'},],
          [{valueForButton: '4'}, {valueForButton: '5'}, {valueForButton: '6'}, {valueForButton: '-'},],
          [{valueForButton: '1'}, {valueForButton: '2'}, {valueForButton: '3'}, {valueForButton: '+'},],
          [{valueForButton: 'TH'}, {valueForButton: '0'}, {valueForButton: ','}, {valueForButton: '='},],
        ]
      }
    }
  },
  methods: {
    onButtonClick(newSign) {
      const newSignIsNumber = this.isItNumber(newSign)
      if (newSign === 'AC') {
        console.log(this.state.resultArray[this.state.resultArray.length - 1])
        this.state.resultArray = [0]
        console.log(this.state.resultArray[this.state.resultArray.length - 1])
      } else if (newSign === 'TH') {
        alert('THEME WAS CHANGED')
      } else if (this.state.resultArray.length === 1 && this.state.resultArray[0] === '0' && newSign === '0') {
        alert('it is already 0')
      } else if (this.state.resultArray.length === 1 && this.state.resultArray[0] === '0' && newSignIsNumber) {
        this.state.resultArray = [`${newSign}`]
      } else if (!newSignIsNumber && !this.isItNumber(this.state.resultArray[this.state.resultArray.length - 1])) {
        alert('you can not put two math signs in a row')
      } else if (newSign === '=') {
        if (!this.isItNumber(this.state.resultArray[this.state.resultArray.length - 1])) {
          alert('expression should be end with a number ')
        }
      } else {
        this.state.resultArray.push(newSign)
      }


    },
    isItNumber(sign) {
      return sign === '0' || sign === '1' || sign === '2' || sign === '3' || sign === '4' || sign === '5' || sign === '6' || sign === '7' || sign === '8' || sign === '9'
    },
    calculateResult(arr) {
      console.log(arr)
    }
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
