// ! Callback function, which will call some function twice

// callBackFn - whatever function we want to call twice.
function callMeTwice(callBackFn) {
    callBackFn()
    callBackFn()
}

// * Arrow function
let sayHey = () => {
    console.log("Hey! 👋🏽")
}

callMeTwice(sayHey)

// * Use callMeTwice with an arrow function
callMeTwice(() => { console.log("Goodbye 👋🏽")})

let pets = ["tacoCat", "godDog", "dribBird"]

// ! ⚠️ forEach(), built-in callback function
pets.forEach((currentPet) => {
    console.log("My new pet is a...", currentPet)
})


// ---------------------->

// * For this function we need a list to act on, and a function to call for the behavior of each item...
let forEach = (list, callbackFn) => {
    for (let item of list) {
        callbackFn(item)
    }
}

forEach(pets, (currentPet) => {
    console.log("My new favorite animals is a...", currentPet)
})

// ! ⚠️ map(), built-in callback function
    // Will transform and return a new array

let greetings = ['Hello', 'Hey', 'Yo'];
// Use .map() method to transform the letters of each greeting to be all caps.
    // Hello => HELLO
let capitalGreetings = greetings.map((greet) => greet.toUpperCase() + '.')

console.log("My Greetings, after map(): ", capitalGreetings)

// ---------------------->

let map = (list, callbackFn) => {
    let results = []

    // Loop over the incoming list, for each item we want to perform the callback function.
        // After the callback function has been performed, will push transformed item to the results data  structure.
    for (let item of list) {
        let transformedItem = callbackFn(item)
        results.push(transformedItem)
    }

    return results
}

let myNumbers = [1, 2, 3, 4, 5, 6]

let numbersMultiplied = map(myNumbers, (num) => {
    return num * 2    
})

console.log("Numbers Multiplied: ", numbersMultiplied)

// ! ⚠️  Settimeout()
for(let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("Yay, time has passed!!")
    }, 1200)
}


// ------->

// ! ⚠️ Filter()

let superNumbers = [1, 27, 45, 77, 3, 19, 23, 36, 93]

// use filter() to create a new array of only values less than 50
let filteredNumbers  = superNumbers.filter((number) => number < 50 )
console.log("Filtered Numbers: ", filteredNumbers)
