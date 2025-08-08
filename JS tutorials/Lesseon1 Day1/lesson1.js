let string = "Hello"; // Primitive type 
let number = 42; // Primitive type
let boolean = true; // Primitive type
let number1 = 3.14; // Primitive type
let boolean1 = false; // Primitive type
let undefinedVariable; // Undefined type //a variable that has been declared but not assigned a value
let nullVariable = null; // Null type //a variable that has been declared and assigned a value of null
let symbolVariable = Symbol("description"); // Symbol type //a unique and immutable value
let bigIntVariable = BigInt(123456789012345678901234567890); // BigInt type //a numeric value that can represent integers with arbitrary precision
// Primitive Data Types in JavaScript

let a = 10; // Number type
let b = a; // Copying value of a to b
a = 20; // Changing value of a
console.log(b); // Output: 10, because b is a copy of the value of a at the time of assignment

// Reference Data Types in JavaScript (also known as Non-Primitive Data Types)
// Objects, Arrays, Functions, etc. are reference types.
// array is a reference type
let arr1 = [1, 2, 3]; // Array type
let arr2 = arr1; // Copying reference of arr1 to arr2
arr1[0] = 10; // Changing first element of arr1
console.log(arr2[0]); // Output: 10, because arr2 references the same array
// Objects are also reference types
let obj1 = { name: "Alice" }; // Object type
let obj2 = obj1; // Copying reference of obj1 to obj2
obj1.name = "Bob"; // Changing property of obj1
console.log(obj2.name); // Output: "Bob", because obj2 references the same object
// Functions are also reference types
function greet() {
    console.log("Hello, World! i am a function");
}
let greetFunction = greet; // Copying reference of greet function
greetFunction(); // Output: "Hello, World!", because greetFunction references the same function
// Summary:
// Primitive types are immutable and copied by value.
// Reference types are mutable and copied by reference.
// Primitive types include: string, number, boolean, undefined, null, symbol, and bigint.
// Reference types include: objects, arrays, and functions.
// Example of a function that takes a primitive type and a reference type
function exampleFunction(primitive, reference) {
    primitive = 100; // Changing primitive value
    reference.name = "Charlie"; // Changing property of reference object
}
let primitiveValue = 50; // Primitive type
let referenceObject = { name: "David" }; // Reference type
exampleFunction(primitiveValue, referenceObject);
console.log(primitiveValue); // Output: 50, because primitiveValue is unchanged
console.log(referenceObject.name); // Output: "Charlie", because referenceObject is changed
// Example of a function that returns a primitive type and a reference type
function returnTypes() {
    let primitiveReturn = 200; // Primitive type
    let referenceReturn = { name: "Eve" }; // Reference type
    return { primitiveReturn, referenceReturn };
}
let { primitiveReturn, referenceReturn } = returnTypes();
console.log(primitiveReturn); // Output: 200, because primitiveReturn is a primitive type
console.log(referenceReturn.name); // Output: "Eve", because referenceReturn is a reference type

// Example of using a primitive type in a function
function addOne(num) {
    return num + 1; // Adding 1 to the primitive number
}
let result = addOne(5); // Calling the function with a primitive number
console.log(result); // Output: 6, because the function returns a new primitive value

// Example of using a reference type in a function
function addToArray(arr, value) {
    arr.push(value); // Adding value to the reference array
}
let myArray = [1, 2, 3]; // Reference type array
addToArray(myArray, 4); // Calling the function with a reference array and a value
console.log(myArray); // Output: [1, 2, 3, 4], because the function modifies the original array

// Example of using a reference type in a function with an object
function updateObject(obj, key, value) {
    obj[key] = value; // Updating the property of the reference object
}
let myObject = { name: "Frank" }; // Reference type object
updateObject(myObject, "name", "Grace"); // Calling the function with a reference object
console.log(myObject.name); // Output: "Grace", because the function modifies the original object

// Example of using a function as a reference type
function multiply(a, b) {
    return a * b; // Multiplying two numbers
}
let multiplyFunction = multiply; // Copying reference of multiply function
let product = multiplyFunction(3, 4); // Calling the function using the reference
console.log(product); // Output: 12, because the function returns the product of 3 and 4

// Example of using a function as a callback
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]); // Applying the callback function to each element of the array
    }
}
let numbers = [1, 2, 3, 4]; // Reference type array
processArray(numbers, function(num) {
    return num * 2; // Doubling each element
});
console.log(numbers); // Output: [2, 4, 6, 8], because the callback function modifies each element of the array

// Example of using a function as a method of an object
let person = {
    name: "Hannah",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Output: "Hello, Hannah", because greet is a method of the person object

// Example of using a function as a method of an object with a different context
let anotherPerson = {
    name: "Ian",
    greet: person.greet // Assigning the greet method from person object
};
anotherPerson.greet(); // Output: "Hello, Ian", because greet is called with anotherPerson as context

// Example Difference between == and === (Equality vs Strict Equality)
let x = 5; // Number type
let y = "5"; // String type
console.log(x == y); // Output: true, because == checks for value equality and performs
// type coercion
console.log(x === y); // Output: false, because === checks for both value and type

// Example of using a function with different types of parameters
function displayInfo(name, age) {
    console.log("Name: " + name + ", Age: " + age);
}
let personName = "John"; // String type
let personAge = 30; // Number type
displayInfo(personName, personAge); // Calling the function with different types
console.log("Function executed successfully!");

// Example of using a function with default parameters
function greetUser(name = "Guest") {
    console.log("Hello, " + name);
}
greetUser(); // Output: "Hello, Guest", because no name is provided
greetUser("Alice"); // Output: "Hello, Alice", because a name is provided


// Example of using a function with rest parameters
function sum(...numbers) {
    let total = 0; // Initializing total to 0
    for (let num of numbers) {
        total += num; // Adding each number to total
    }
    return total; // Returning the total sum
}
let totalSum = sum(1, 2, 3, 4, 5); // Calling the function with multiple numbers
console.log(totalSum); // Output: 15, because the function returns the sum of all numbers

// Examples Difference between == and === (Equality vs Strict Equality)
let a1 = 10; // Number type
let b1 = "10"; // String type
console.log(a1 == b1); // Output: true, because == checks for value equality and performs
// type coercion
console.log(a1 === b1); // Output: false, because === checks for both value and type

// Example of using if(NaN == NaN) in JavaScript
let value1 = NaN; // Not a Number
let value2 = NaN; // Not a Number
console.log(value1 == value2); // Output: false, because NaN is not equal to anything, including itself
console.log(value1 === value2); // Output: false, because === checks for both value and type

// Example of using isNaN() function to check for NaN
let value3 = "Hello"; // String type
console.log(isNaN(value3)); // Output: true, because "Hello" is not a number

// Example of using isNaN() function with a number
let value4 = 123; // Number type
console.log(isNaN(value4)); // Output: false, because 123 is a number

// NaN (Not a Number) is a special value in JavaScript that represents an undefined or unrepresentable value, especially in floating-point calculations.
// It is a property of the global object and is used to indicate that a value is not a valid number.

// NaN is not equal to any value, including itself, which is why NaN == NaN returns false.
// To check if a value is NaN, you can use the isNaN() function
// or the Number.isNaN() method, which is more reliable as it does not perform type coercion.


