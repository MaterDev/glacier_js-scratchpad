function bark() {
    return "Bork! 🐩"
}

let pet = {
    type: "Dog",
    age: 33,
    breed: "Schnoodle",
    // Assigning the function 'bark' to a property on the 'pet' object
    sound: bark
}

// ! You can store any amount of things in an object.
module.exports = pet