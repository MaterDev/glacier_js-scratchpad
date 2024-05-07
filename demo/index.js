// ! Require into the file where you want
let peopleArray = require('./people.js')
let generateNewSecret = require('./secret.js')
let myPet = require('./pet.js')

console.log("People Array: ", peopleArray)
console.log("My secretCode is...", generateNewSecret(2))
console.log("My Pet...", myPet)
console.log("My Pet's sound is...", myPet.sound())