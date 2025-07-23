// Explain Looping in JavaScript
// Looping is a fundamental concept in programming that allows you to execute a block of code multiple times. In JavaScript, there are several ways to loop through data structures like arrays, objects, and more. Looping is essential for tasks such as iterating over collections, processing data, and automating repetitive tasks.
// In this lesson, we will explore different types of loops in JavaScript and how to use them effectively.

// Types of Loops in JavaScript
// 1. for loop: The traditional loop that iterates a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while loop: A loop that continues as long as a specified condition is true.
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// 3. do...while loop: Similar to the while loop, but it guarantees at least one iteration.
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// 4. for...in loop: Used to iterate over the properties of an object.
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 5. for...of loop: Used to iterate over iterable objects like arrays.
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 6. forEach method: A method available on arrays that executes a provided function once for each array element.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

// 7. map method: Creates a new array populated with the results of calling a provided function on every element in the calling array.
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 8. filter method: Creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4] 

// 9. reduce method: Executes a reducer function on each element of the array, resulting in a single output value.
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum); // Output: 15





