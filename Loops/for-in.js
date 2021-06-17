// For in Loop

/*
    For in loops work by looping over enumerable property names of an object

    for (iterate in iterable) {
        code block to execute over each iterate
    }

*/

let teacher = "Paul Niemczyk";
let randomNums = ["1", "5", "7", "22"]

let person = {
    name: "Paul",
    age: 25
}

/*for (i in teacher) {
    console.log(i, teacher[i])
}
*/
// i is the enumerable 
// teacher[i] objects of enumerables

for (i in randomNums) {
    console.log(i, randomNums[i])
}

for (property in person) {
    //          (key    , value) of our object
    console.log(property, person[property])
}