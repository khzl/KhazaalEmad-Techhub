// What Difference Between var, let and const
// var, let, and const are all used to declare variables in JavaScript, but they have different characteristics and use cases.
// 1. var
// - Function-scoped or globally-scoped
// - Can be re-declared and updated
// - Hoisted to the top of its scope
// 2. let
// - Block-scoped
// - Can be updated but not re-declared within the same scope
// - Hoisted to the top of its block
// 3. const
// - Block-scoped
// - Cannot be updated or re-declared
// - Hoisted to the top of its block
// - Used for constants or values that should not change

// Example of var, let, and const
var globalVar = 'I am a global variable'; // Can be accessed anywhere in the code
let blockLet = 'I am a block-scoped variable'; // Can be accessed within the block it is defined
const constantConst = 'I am a constant variable'; // Cannot be changed or re-declared

// Example of variable declaration and usage
let name = 'John'; // Using let to declare a variable
let age = 30; // Using let to declare another variable
const country = 'USA'; // Using const to declare a constant variable
// Function to display user information
function displayUserInfo() {
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Country:', country);
}
// Calling the function to display user information
displayUserInfo(); // Output: Name: John, Age: 30, Country: USA

// Changing the value of a variable declared with let
age = 31; // Allowed, as let allows updating the value
// Trying to change the value of a constant variable will result in an error
// constantConst = 'New Value'; // Uncommenting this line will throw an error

// Displaying the updated user information
function displayUpdatedUserInfo() {
    console.log('Updated Age:', age); // Output: Updated Age: 31
}
displayUpdatedUserInfo(); // Calling the function to display updated user information
// Example of variable scope
function variableScopeExample() {
    var functionScopedVar = 'I am function scoped'; // Can be accessed within the function
    let blockScopedLet = 'I am block scoped'; // Can be accessed within the block
    const blockScopedConst = 'I am a constant'; // Can be accessed within the block

    if (true) {
        var functionScopedVar = 'I can be re-declared'; // Re-declaring var is allowed
        let blockScopedLet = 'I am still block scoped'; // This is a new variable, not the outer one
        console.log(functionScopedVar); // Output: I can be re-declared
        console.log(blockScopedLet); // Output: I am still block scoped
    }

    console.log(functionScopedVar); // Output: I can be re-declared
    console.log(blockScopedLet); // Output: I am block scoped (outer variable)
    console.log(blockScopedConst); // Output: I am a constant
}
variableScopeExample(); // Calling the function to demonstrate variable scope

// Example of variable hoisting
console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = 'I am hoisted'; // Variable declaration is hoisted, but not the assignment
console.log(hoistedVar); // Output: I am hoisted (after assignment)

// Example of let and const hoisting
// console.log(hoistedLet); // Uncommenting this line will throw an error (ReferenceError: Cannot access 'hoistedLet' before initialization)
let hoistedLet = 'I am hoisted'; // Variable declaration is hoisted, but not the assignment
console.log(hoistedLet); // Output: I am hoisted (after assignment)
// console.log(hoistedConst); // Uncommenting this line will throw an error (ReferenceError: Cannot access 'hoistedConst' before initialization)
const hoistedConst = 'I am a constant'; // Variable declaration is hoisted, but not the assignment
console.log(hoistedConst); // Output: I am a constant (after assignment)

// Example of using variables in a loop
for (let i = 0; i < 10; i++) {
    console.log('Iteration:', i);
}
// Using var in a loop (not recommended due to function scope)
for (var j = 0; j < 10; j++) {
    console.log('Iteration with var:', j);
}

console.log('Final value of j:', j); // Output: Final value of j: 10 (var is function-scoped, so j is accessible here)
// Example of using const in a loop (not allowed, as const cannot be reassigned)
// for (const k = 0; k < 10; k++) { // Uncommenting this line will throw an error (SyntaxError: Identifier 'k' has already been declared)
//     console.log('Iteration with const:', k);
// }
// Example of using const with arrays and objects
const myArray = [1, 2, 3]; // Using const to declare an array
myArray.push(4); // Allowed, as we can modify the contents of the array
console.log('Updated array:', myArray); // Output: Updated array: [1, 2, 3, 4]

const myObject = { name: 'Alice', age: 25 }; // Using const to declare an object
myObject.age = 26; // Allowed, as we can modify the properties of the object
console.log('Updated object:', myObject); // Output: Updated object: { name: 'Alice', age: 26 }

// Trying to reassign a new value to the const variable will result in an error
// myArray = [5, 6, 7]; // Uncommenting this line will throw an error (TypeError: Assignment to constant variable.)
// myObject = { name: 'Bob', age: 30 }; // Uncommenting this line will throw an error (TypeError: Assignment to constant variable.)
// Example of using let in a loop with block scope
for (let i = 0; i < 5; i++) {
    console.log('Block scope iteration:', i);
}
// console.log('Outside block scope:', i); // Uncommenting this line will throw an error (ReferenceError: i is not defined)
// Example of using var in a loop with function scope
for (var j = 0; j < 5; j++) {
    console.log('Function scope iteration:', j);
}
console.log('Outside function scope:', j); // Output: Outside function scope: 5 (var is function-scoped, so j is accessible here)

// Example of using const with objects and arrays
const myArray2 = [10, 20, 30]; // Using const to declare an array
myArray2.push(40); // Allowed, as we can modify the contents of the array
console.log('Updated myArray2:', myArray2); // Output: Updated myArray2: [10, 20, 30, 40]
const myObject2 = { name: 'Bob', age: 35 }; // Using const to declare an object
myObject2.age = 36; // Allowed, as we can modify the properties of the object
console.log('Updated myObject2:', myObject2); // Output: Updated myObject2: { name: 'Bob', age: 36 }
// Trying to reassign a new value to the const variable will result in an error
// myArray2 = [50, 60, 70]; // Uncommenting this line will throw an error (TypeError: Assignment to constant variable.)
// myObject2 = { name: 'Charlie', age: 40 }; // Uncommenting this line will throw an error (TypeError: Assignment to constant variable.)    

// Example of using let in a loop with block scope
for (let i = 0; i < 3; i++) {
    console.log('Block scope iteration with let:', i);
}
// console.log('Outside block scope with let:', i); // Uncommenting this line will throw an error (ReferenceError: i is not defined)


