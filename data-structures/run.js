let instructors = [
    { 
        name: 'Edan', 
        title: 'instructor',
        cohorts: [
            {
                name: 'Tarjan',
                dates: {
                    started: '06-13-2020',
                    graduated: '11-25-2020',
                } 
            },
            {
                name: 'Gaiman',
                dates: {
                    started: '03-28-2022',
                    graduated: '10-12-2022',
                }
            }
        ]
    },
    { 
        name: 'Liz',
        title: 'instructor',
        cohorts: [
            {
                name: 'Jemisin',
                dates: {
                    started: '05-02-22',
                    graduated: '09-16-22'
                }
            }
        ]
    }
]

// ! These two lines are equivalent
// console.log("My key:", instructors[0].name)

let keyToFind = "name"
// console.log("My key:", instructors[0][keyToFind])

// * Build your way to the info you want.

// Retrieve the graduation date for the 1st instructor, 0th cohort
let graudationDate = instructors[0].cohorts[0].dates.graduated

// Use JSON.stringify to fully print the contents of an object.
console.log("👾 graduationDate: ", JSON.stringify(instructors))
// console.log("graduationDate: ", graudationDate)


// ! for-of, for arrays ; for-in, for objects.

for (let cohort of instructors[0].cohorts) {
    console.log(`${cohort.name} will graduate on ${cohort.dates.graduated}`)
}

let dates = {
    started: '06-13-2020',
    graduated: '11-25-2020'
}

// ! All 3 of the following do the same exact thing
let startDate = dates.started

startDate = dates["started"]
 
let dateType = 'started'
startDate = dates[dateType]

// ! Reassignment of values in an object
// dates.started = "Can I pet that dog?"
// dates["started"] = "Can I pet that cat?"

// console.log("Start Date: ", dates)



/**
 * 
 *  * Getter: to retrieve the values within some data structure.
 *  * Setter: used to set the value of a property within a data structure.
 *      * adding a property that doesn't exist
 */

// ! This function will return the value from the dates object, based on the type
function getDate(type) {
    return dates[type]
}

console.log("startDate", getDate("started"))
console.log("graduationDate", getDate("graduated"))

// ! This function will set the value for a property type
function setDate(type, val) {
    dates[type] = val
}

setDate('started', '11-27-2024')
setDate('graduated', '5-22-2025')

// * If we set the value for some prop that doesnt exist, it will be added!
setDate('springBreak', '3-15-2025')

console.log("My dates: ", dates)


instructors[0].cohorts[0].dates.graduated = "1-1-31"

let tarjanGradDate = instructors[0].cohorts[0].dates

console.log("Tarjan's Graduation Date: ", tarjanGradDate)

