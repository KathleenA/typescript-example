/**************************************************************
* 1. Change this file to .ts file
* 2. add missing types
***************************************************************/
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const button = document.querySelector('#calc')
const result = document.querySelector('#result')

function add(n1, n2) {
  return n1 + n2
}

button.addEventListener('click', () => {
  const res = add(num1.value, num2.value)
  result.innerHTML = res
})
