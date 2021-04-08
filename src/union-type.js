/**************************************************************
* 1. Change this file to .ts file
* 2. add types to function "combine"
*   2.a. function combine must work for strings and numbers
* 3. add a third parameter "resultConversion" to the function
*   3.a. The type of "resultConversion" should be a literal type
* 4. add a custom type "Combinable" and replace union type with custom type
***************************************************************/
function combine(input1, input2) {
  return input1 + input2
}

const combinesAges = combine(30, 20)
console.log(combinesAges)

const combinesNames = combine('John', 'Max')
console.log(combinesNames)
