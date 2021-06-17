// Functions

/*
    Function is a block of code that can take in parameters (door)
    perform an action, and return the result of that action
    There are two types of functions:
        - function decleration
        - function expression
            - arrow functions
    Functions have a defeult return state,ment of undefined unless otherwise specidfied
*/

// Function Decleration

/*
    Declerations are hoisted. This is their template.
    function functionName(parameters) {
        block of code to be run
        return statement (not needed)
    }
*/

function funDecleration() {
    //console.log("This is a function decleration.")
    return "This is a function decleration"
}

// function will not run unless it is called
// paranthesis immedietly invoke the function
// funDecleration()

let result = funDecleration()

console.log(result)

//console.log(funDecleration)

function greetUser(name) {
    return `Hello ${name}`
}
let userName = "Jacob"
console.log(greetUser(userName))

// Function Expressions
/*
    Function expression utilizes variable as a placeholder
    function expression is not hoisted
    Expressed through varibale instead of having naem (can give it a name though)
*/

let myDog = function(name, breed) {
    console.log(`${name} is an ${breed}`)
}

console.log(myDog("Bentley", "Olde English Bulldog"))


// Arrow functions
/*
    Introduced in ES6
    more concise way of writing functions
    arrow functions are created using function expressions ONLY
*/

// Concise body function 
// can only have on parameter if it is npt enclosed by ( )
let greeting = () => console.log(`Hello friend`)

greeting("Jacob", 19)

// Block Body Arrow Function

let sendEmail = (email, name) => {
    return `Hello ${name}:
    
    We have been trying to reach put yo you 
    
    rfgaergeq is this right ${email}
    
    etgqe
    
    anoyomh people`
}

console.log(sendEmail("ergetgqt.org, Paul"));

// Immedietly Invoked Function Execution
/*
    Function declerations that have no name and are immedietly invoked
*/

(function () {
console.log("IIFE")
})();

// Function return statements
// Always return one value

function returnFun(x, y) {
    // return [2, 5]
    let mySet = new Set
    mySet.add(x)
    mySet.add(y)
    return typeof mySet
}

console.log(returnFun(5, 5))

// Challenge
// Create a function declerationnamed tipcalculator that takes the bill,
// the sales tax, and the tip percentage and returns the tip amount


//console.log(funDecleration)

function tipAmount(bill, salesTax, tipPercent) {
    let taxAmt = bill * (salesTax/100)
    let totalBill = bill + taxAmt
    let totalTip = totalBill * (tipPercent/100)
    let billTotal = totalTip + totalBill
    return `your bill total is ${billTotal} of which the tip is ${totalTip}`
}

console.log(tipAmount(100, 7, 20))

tipAmount();

// Extra spicy challenge
// decleration named capitalizeName which takes one paramter it than capitalizes the first letter of the name and returns it to you
/*
function capName(name) {
    let lowerName = name.toLowerCase
    console.log(lowerName)
    let fLetter = lowerName[0].toUpperCase
    console.log(fLetter)
    return fLetter + lowerName.slice([1])
}

console.log(capName("jacob"))

capName();

*/

function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice([1]).toLowerCase
}

function revStr(str) {
    return (str === "") ? "" : revStr(str.substr(1)) + str.charAt(0);
}

console.log(revStr("paul"))


function recStr(str) {
    if (str === "") {
        return ;""
    } else {
        return revStr(str.substrt(1) + str.charAt(0))
    }
}

revStr("paul")