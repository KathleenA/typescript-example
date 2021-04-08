/**************************************************************
* 1. Change this file to .ts file
* 2. add missing types to parameters of functions
* 3. add return types to functions
*   3.a. write "printResult" with return type "undefined"
* 4. add function type to combineValues so that only "add" is excepted
* 5. add missing types to "addAndHandle"
***************************************************************/
function add(n1, n2) {
  const result = n1 + n2
  return result
}

function printResult(num) {
  console.log('Number ' + num)
}

printResult(add(1, 3))

let combineValues
combineValues = add
combineValues = printResult
combineValues = 5

console.log(combineValues(3, 4))

// Second Part
// function addAndHandle(n1, n2, cb) {
//   const result = n1 + n2
//   cb(result)
// }
//
// addAndHandle(3, 4, (result) => {
//   console.log(result)
//   return result
// })
