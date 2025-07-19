// array operation 
// 1- Reading Arrays
const numbers = [1, 2, 3, 4, 5];
// 2- Creating Arrays
const fruits = new Array('apple', 'banana', 'orange'); // Using the Array constructor
// 3- Updating Arrays
fruits[1] = 'cherry'; // Updating the second element
// 4- Deleting Arrays
fruits.pop(); // Removes the last element (orange)

// Remove All Element From Array Using Filter
const numbersToRemove = [1,2,3,4,5];
const filteredNumbers = numbers.filter()
console.log(filteredNumbers); // Output: []

// sum all Element Using Reduce
const NumbersToSum = [1, 2, 3, 4, 5];
const sum = NumbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue,
 0);
console.log(sum); // Output: 15

// Reverse Array Without Using Reverse Method
let numbersToReverse = [1, 2, 3, 4, 5];
for (let i = 5; i > 0;i--) {
    console.log(numbersToReverse[i - 1]); // Output: 5, 4, 3, 2, 1
}
// Reverse Array without using Reverse Method and Convert from [1,2,3] to [3,2,1]
numbersToReverse = [1, 2, 3, 4, 5];
for (let i = numbersToReverse.length - 1; i >= 0; i--) {
    numbersToReverse.push(numbersToReverse[i]);
}
console.log(numbersToReverse); // Output: [5, 4, 3, 2, 1]
