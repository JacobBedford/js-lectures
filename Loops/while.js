// While Loops

/*
    While statement creates a loop as long as the cindition
    we've specified returns true
    
    while (condition) {
        code statement
    }

    To stop while loop from executing condition must at one point return false
*/

let count = 0;

while(count <= 100) {
    console.log(count)
    count += 1
}

// challenge

for (i = 100; i < 501; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0 && i % 3 =/= 0) {
        console.log("Buzz")
    } else {
        console.log(`${i} not divisible by either number`)
    }
}
