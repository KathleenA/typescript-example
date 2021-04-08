/**************************************************************
* 1. Change this file to .ts file
* 2. add types to variable "person" and "favoriteHobbies"
* 3. change some values of object "person"
* 4. use type enum instead of global const ADMIN, READ_ONLY, EDITOR
*    4.a start enum label numbers by 5
* 5. use type any for variable "favoriteHobbies"
***************************************************************/
const ADMIN = 0
const READ_ONLY = 1
const EDITOR = 2

const person = {
  name: 'Mustermann',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'admin'],
  betterRole: READ_ONLY,
}

let favoriteHobbies = []
favoriteHobbies = ['Cooking']
console.log(favoriteHobbies)

if (person.betterRole === READ_ONLY) {
  console.log('is read only')
}
