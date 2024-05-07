const SECRET_CODE = 123

function generateNewSecret(numberIn) {
    return SECRET_CODE * numberIn
}

module.exports = generateNewSecret