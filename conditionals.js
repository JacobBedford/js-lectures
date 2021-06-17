// Conditionals

/*
    JS Conditionals allow us to make decisions and carry out actions according to those decisions.
        - Tradistional id; else; and else if statements.
        - Ternary operator
        - Switch statement
    Comditionals execute a piece of code if a condition is true by default.]
*/

// let myNumber = 25;
// console.log(Boolean(myNumber))
//if (myNumber == "25") {
    //console.log("There's something in myNumber variable")
// }

/*
if (conditional) {
    fire off this block of code if teh above statement is true
}
*/

// If else

//if(myNumber) {
   // console.log('My number is ${myNumber})
//} else {
   // console.log('The condition appears to be false')
//}

let temp = 80;

if (temp > 1000) {
    console.log ("Global warming yo!")
} else if (temp >= 80) {
    console.log("Nice summer day")
} else if (temp > 60) {
    console.log("spring or fall")
} else if (temp < 60) {
    console.log ("What's next snow plows?")
} else {
    console.log("Bruv you alright?! This is a weather app!")
}

let weekDay = "Thursday"

if (weekDay == 'Wednesday') {
    console.log('Dentist Appointment')
} else if (weekDay == 'Thursday') {
    console.log("9am 1150 Web Dev")
} else if (weekDay == "Friday") {
    console.log("Weekend!!!")
}

// Testing Multiple conditions 

let myName = "Jacob"
let age = 19;

if (myName == "Jacob" && age == 19) {
    console.log(`Jacob is not lying to you he is actually ${age}`)
} else if (myName == "Danielle" && age >= 21) {
    console.log(`Shes your instructor, but I dont know her age`)
} else {
    console.log(`I'm lonely please send help.`)
}

// Ternaries
/*
    A comdotional statement which takes three operands"
        - a condition followed by a question mark ?
        = truthy expression followed by a colon:
        - falsey expression
    shortcut to the if statement
*/

//let lightSwitch = true;

//condition ? block of code if true : block of code

//lighSwitch ? console.log("lights are on") : console.log("lights are off")

// Ternary example below

temp = 100;

//temp >= 100 ? console.log("Am I in FLorida?")
//: temp >= 80 ? console.log("Fine summer day")
//: temp >= 60 ? console.log("Sring or Fall")
//: temp >= 40 ? console.log("What's next? Snow plows?!")
//: console.log("I asked for teh temperature, not your life story!")

// Switch Statements

/*
    Switched evaluate expressions switching their expression value to a case clause. 
    Switch then executes that case statement tuntil it is "broken"
*/
let mySwitch = false

console.log("------------------")
switch(true) {
    case temp >= 100:
    case mySwitch: // allows you to nest multiple if switches together to check their condition
        console.log("Am I in Florida?")
        break // prevents fall through into another "if" statement
    case temp >= 80:
        console.log("Fine summer day")
    default:
        console.log("llll")
        break
}

// console.log(new Date().getDay())

switch(new Date().getDay()) {
    case 0:
        console.log("Sunday")
        break
    case 1: 
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
}

// Challenge

// Create a variable with any number between 0-100.
// For multiples of 3 print"Fizz"
// For multples of 5. prnt "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not multipls of 3 and 5, print numbver itself


/* % remainder after division
// ? represents brackets
*/ 

let testNum = 15

testNum % 15 === 0 ? console.log("Fizz Buzz!")
: testNum % 5 === 0 ? console.log("Buzz")
: testNum % 3 === 0 ? console.log("Fizz")
: console.log(testNum)

console.log(5 == "5")