/**************************************************************
* 1. Fix the TS error
***************************************************************/
let userInput: unknown
let userName: string

userInput = 5
userInput = '20'
userName = userInput

// it never return a value, it crahes the app and throw an error
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500)
