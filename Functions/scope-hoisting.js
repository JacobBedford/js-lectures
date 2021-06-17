// Scope & Hoisting

/*
    Scope determines how different blocks of code can be accessed.
    Three types of scope:
        - Global
        - Block or Local 
        - Function
*/

// Global scope
/*
    Our JS file, or window object in terms of browser
    Accessible from every other scope
*/
let x;
console.log(x)
function addOne() {
    x = 1
}

addOne()
    console.log(x)

// Function scope

function carName() {
    let name = "maserati"
    var model = "GranTurismo"
    if (true) {
        // let will not let you console.log
        // it is scoped to the enclosing function
        // let year = 2013
        var year = 2013
        // var will let you console.log
        // scoped to the enclosing block
    }
    console.log(year)
    // console.log(name)
}
carName()
// console.log(name)
// Let/Const
{
var functionScopeVariable = "Function Scope Var(iable)"
}

// in this instance functionScope is the same as globalScope
console.log(functionScopeVariable)

// Hoisting
/*
    JS is an interpreted language that is being read top to bottom and left to right
    The parser which reads teh code goes over it twice.
    First to hoist or assign memory location to ALL VAR(iable)
    decleration as well as Function Declerations. During the secodn pass, the interpreter 
    actually reads the initilization values and expressions that we have assigned
    and execute our code
*/

let y;
console.log(y)
// 1. y gets declared and assigned a value of undefined
// 2. console log reads the undefined value

// Code below results in an error because let does not get hoisted
// console.log(z)
// let z;

// This works because var gets hoisted first, before consol.log executes
console.log(a)
var a;

console.log(cheese)
var cheese = "Gouda";



let shirt = "red"
console.log(shirt)

// Hoisting and Function Decleration vs Function Expression
// This is a Function Decleration
// Invoking the function before creation will work because function decleration is hoisted
helloWorld()
function helloWorld() {
    console.log("Hello World from the Hoisting Side! - Adele")
}
// This is a function invokation
// helloWorld()
// addNums(5, 5)
// will not work because fx expressions are NOT hoisted
let addNums = function(x, y) {
    console.log(x + y)
}
// works (10) because function expression is created, then invoked
addNums(5, 5)

//  Arrow functions as derivatives of fx expressions are also NOT hoisted (only used with expressions)

let arr = ["Paul", "Jessica", "Marshall"]

arr.map((value) => console.log(value))
// more performant and elogant

arr.map(function(value) {console.log(value)})
// looks like a brick hit it & slow