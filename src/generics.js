/**************************************************************
* 1. Change this file to .ts file
* 2. make "combine" a type-safe generic function
***************************************************************/
function combine(input1) {
  return input1
}

const combinesAges = combine(30)
console.log(combinesAges)

const combinesNames = combine('John')
console.log(combinesNames)
