// For of Loop

/*
    For of Loop iterates over property values.
    Btter suited for arrays and strings when values are needed.

    for (iterate of iterable) {
        block of code to execute on each iterate run
    }

*/



let classmates = ["Kayce", "Alex", "Jessica", "Jacob", "Freya"]

for (student of classmates) {
    console.log(student)
}

let myText = "This is my smaple text."

for (letters of myText) {
    console.log(letters)
}

let person = {
    name: "Jacob",
    age: 19
}

for (i of person) {
    console.log(i)
}

for (i of Object.entries(person)) {
    console.log(i)
}

// in for numerals 
// of for values (string arrays)
