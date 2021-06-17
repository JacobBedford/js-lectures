// Operators

/*
    Assignment , Arithmetic & Comparison
        - Assignment assigns value to a declaration
            - denoted by =
        - Arithmatic operators perform simple math
            - Addition +
            - Subtraction -
            - Multiplication *
            - Division /
            - Exponent **
            - Modulus %
            - Math. objects to help with other math operations
        - Comparison operators compare values
            - Equality and Strict Equality == & ===
            - InEquality & Strict Inequality 
            - greater than or less than > <
            - greater or equal than or less or equal than
            - And or & Not

let age = 25;

console.log(2 + 5)

// Modulus - provides ramainder of Euclidean division.

console.log(25 % 5);

// Math object - allows access to more advanced mathmatical computations

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs Strict Equality Operators
/*
    Equality & Strict Equality Operators
        - Return truthy or falsey value dpeending on a given conditon
        - Equality performs type coercion on one of the values its beung 
        compared to. For ex. 5 = "5" converts teh string into an integer
        - Strict Equality checks if the value and its type are the same
*/

console.log(5 = 5) // returns true

console.log(5 == 5) // returns true

console.log(5 = '5') // returns true because of type 

console.log(5 == '5') // returns false because we're checking for value

let x = 5;
let y = '5'

console.log(typeof x, typeof y) // same value different data types

console.log(5 != 7) // returns true becuase its not equal

console.log(Boolean(25 && 26))

// && compare boolean values

console.log(true && true)

let todayDate = new Date
console.log(todayDate.getFullYear())

// Extra Credit  How to get Date in Javascript

let date = new Date
let year = year.getFullYear()
let month = date.getMonth()
month += 1 // month = month + 1 or month = 5 + 1
let day = date.getDay()

console.log(`Today is ${day} day of ${month} of ${year}`)

// NUll vs. Undefined

/*
    Null - empty value; a container or space for something to fill it in the future
    Undefined- default value fo the declaration does not act
    like an empty conationer.
    Not a number (NAN) - determine if a value is not a number
*/

console.log(isNaN(123)) // returns false (is a number)
console.log(isNaN(0/0)) // returns true (can't divide by zero; NaN)
console.log(isNaN(NaN)) // returns true
console.log(isNaN(Math.sqrt(-1)))

function passDate(year) {
    console.log(year.slice(0,4))
}

let myDate = '20200615'

passDate(myDate)

let name = "Jacob";
let myAge = 19;
let city = "Carmel, IN";

console.log('My name is ${name}. I am ${myAge} years old, and I live in ${city}')

let concat_full = name.concat(` `, `is my name, I'm${myAge} years old. I live in $(city)`,)
console.log(concat_full)

let concat_full = name = " " + myAge + " " + city

console.log(concat_full)
let concatFullLength = concat_full.length

 