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
        resultArray: [],
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

      let expression = this.state.resultArray;

      if (newSign === 'AC') {
        clearExpression()
      } else if (newSign === 'TH') {
        alert('THEME WAS CHANGED')
      } else if (newSign === '+/-') {
        toggleSign()
      } else if (newSign === '=') {
        calculate()
      } else {
        addToExpression(newSign)
      }

      function addToExpression(value) {

        if (expression.length === 0 && isMathOperator(value)) {
          alert('you can not start expression with math operator')
        } else {
          const lastElement = expression[expression.length - 1];
          if (lastElement && isMathOperator(lastElement) && isMathOperator(value)) {
            expression[expression.length - 1] = value;
          } else {
            expression.push(value)
          }
        }

      }

      function isMathOperator(value) {
        return ['+', '-', '*', '/', ',', '%', ','].includes(value);
      }


      function clearExpression() {
        console.log('clear')
        expression.splice(0, expression.length);
      }

      function toggleSign() {
        const lastElement = expression[expression.length - 1];
        if (!isMathOperator(lastElement)) {
          expression[expression.length - 1] = -parseFloat(lastElement);
        }
      }

      function calculate() {
        const result = calculateExpression();
        clearExpression();
        expression.unshift(result);
      }

      function calculateExpression() {
        let expressionString = expression.join('');
        if (expressionString.includes(',')) {
          expressionString = expressionString.replace(',', '.');
        }

        let result;
        try {
          result = Function(`'use strict'; return (${expressionString})`)();
        } catch (error) {
          result = 'Error';
        }

        return result;
      }
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
