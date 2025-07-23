// Arrays are Fundamental Data Structures in JavaScript
// They are used to store multiple values in a single variable
// And Frequently Used In Problem Solving
// Arrays are zero-indexed, meaning the first element is at index 0
const numbers = [1, 2, 3, 4, 5]; // Array of numbers
const fruits = ['apple', 'banana', 'cherry']; // Array of strings
// Mixed data types are also allowed
const mixed = [1, 'apple', true, null]; // Array with mixed data types
// Understanding how to work with arrays is crucial for problem solving in JavaScript
// How To Manipulate Arrays and Iterate Over Them

// Common Array Operations For Problem Solving
// 1. Accessing Elements (Elements are accessed by their index)
const firstNumber = numbers[0]; // Accessing the first element
const secondFruit = fruits[1]; // Accessing the second element
const mixedType = mixed[2]; // Accessing the third element

// Adding / Removing Elements
// 2. Adding Elements (Using push to add an element to the end of the array)
numbers.push(6); // Adds 6 to the end of the numbers array
// 3. Removing Elements (Using pop to remove the last element of the array)
const lastNumber = numbers.pop(); // Removes the last element (6) from the numbers array
// 4. Adding Elements at the Beginning (Using unshift to add an element to the beginning of the array)
fruits.unshift('orange'); // Adds 'orange' to the beginning of the fruits array
// 5. Removing Elements from the Beginning (Using shift to remove the first element of the array)
const firstFruit = fruits.shift(); // Removes the first element ('orange') from the fruits array
// 6. Splicing Elements (Using splice to add or remove elements at a specific index)
numbers.splice(2, 0, 10); // Adds 10 at index 2 without removing any elements
const removedFruits = fruits.splice(1, 1); // Removes the second element ('banana') from the fruits array
// 7. Concatenating Arrays (Using concat to combine two arrays)
const combined = numbers.concat(fruits); // Combines numbers and fruits arrays into a new array
// 8. Slicing Arrays (Using slice to create a new array from a portion of an existing array)
const slicedNumbers = numbers.slice(1, 3); // Creates a new array with elements from index 1 to 2 (not including index 3)
// 9. Finding Elements (Using indexOf to find the index of an element)
const indexOfCherry = fruits.indexOf('cherry'); // Finds the index of 'cherry' in the fruits array
// 10. Checking Existence (Using includes to check if an element exists in the array)
const hasApple = fruits.includes('apple'); // Checks if 'apple' is in the fruits array
// 11. Reversing Arrays (Using reverse to reverse the order of elements in the array)
const reversedNumbers = numbers.reverse(); // Reverses the order of elements in the numbers array
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
// 12. Sorting Arrays (Using sort to sort the elements of the array)
const sortedFruits = fruits.sort(); // Sorts the fruits array in alphabetical order
console.log(sortedFruits); // Output: ['apple', 'cherry', 'orange']

// Iterating Over Arrays
// 1. Using for loop (Used for traditional iteration)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Prints each number in the numbers array
}

// 2. Using forEach (Used for executing a function on each element)
numbers.forEach(function(num) {
    console.log(num); // Prints each number in the numbers array
});

// 3. Using for...of (Used for iterating over iterable objects)
for (const num of numbers) {
    console.log(num); // Prints each number in the numbers array
}

// 4. Using for...in (not recommended for arrays) (Used for iterating over object properties)
for (const index in numbers) {
    console.log(numbers[index]); // Prints each number in the numbers array
}

// Transforming Arrays and Filtering Elements
// 1. Using map (Used for creating a new array with the results of calling a function on every element)
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 2. Using filter (Used for creating a new array with elements that pass a test)
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
// 3. Using reduce (Used for reducing the array to a single value)
const numbersReducer = [1, 2, 3, 4, 5];
const sum = numbersReducer.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15 (sum of all numbers in the array)   

// 4. Using find (Used for finding the first element that satisfies a condition)
const firstEven = numbers.find(function(num) {
    return num % 2 === 0;
});
console.log(firstEven); // Output: 2 (first even number in the array)

// 5. Using findIndex (Used for finding the index of the first element that satisfies a condition)
const indexOfFirstEven = numbers.findIndex(function(num) {
    return num % 2 === 0;
});
console.log(indexOfFirstEven); // Output: 1 (index of the first even number in the array)

// 6. Using some (Used for checking if at least one element satisfies a condition)
const hasOdd = numbers.some(function(num) {
    return num % 2 !== 0;
});
console.log(hasOdd); // Output: true (at least one odd number exists in the array)

// 7. Using every (Used for checking if all elements satisfy a condition)
const allEven = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log(allEven); // Output: false (not all numbers are even)

// 8. Using flat (Used for flattening nested arrays)
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// 9. Using flatMap (Used for mapping and flattening in one step)
const flatMappedArray = nestedArray.flatMap(function(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
});
console.log(flatMappedArray); // Output: [2, 4, 6, 8, 10]

// 10. Using join (Used for joining array elements into a string)
const joinedFruits = fruits.join(', '); // Joins the elements of the fruits array
console.log(joinedFruits); // Output: 'apple, cherry, orange'

// 11. Using split (Used for splitting a string into an array)
const sentence = 'Hello World';
const words = sentence.split(' '); // Splits the sentence into an array of words
console.log(words); // Output: ['Hello', 'World']

// 12. Using fill (Used for filling an array with a static value)
const filledArray = new Array(5).fill(0); // Creates an array of length 5 filled with 0
console.log(filledArray); // Output: [0, 0, 0, 0, 0]    

// 13. Using copyWithin (Used for shallow copying part of an array to another location)
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3); // Copies elements from index 3 to index 0
console.log(copyWithinArray); // Output: [4, 5, 3, 4, 5]

// 14. Using entries (Used for creating an iterator for the array)
const entriesIterator = numbers.entries(); // Creates an iterator for the numbers array
for (const [index, value] of entriesIterator) {
    console.log(`Index: ${index}, Value: ${value}`); // Prints index and value of each element
}

// 15. Using keys (Used for creating an iterator for the keys of the array)
const keysIterator = numbers.keys(); // Creates an iterator for the keys of the numbers array
for (const key of keysIterator) {
    console.log(`Key: ${key}`); // Prints each key (index) of the array
}

// 16. Using values (Used for creating an iterator for the values of the array)
const valuesIterator = numbers.values(); // Creates an iterator for the values of the numbers array
for (const value of valuesIterator) {
    console.log(`Value: ${value}`); // Prints each value of the array
}

// 17. Using toString (Used for converting the array to a string)
numbers = [5, 4, 3, 2, 1]; // Reassigning numbers array for demonstration
const arrayToString = numbers.toString(); // Converts the numbers array to a string
console.log(arrayToString); // Output: '5,4,3,2,1' (string representation of the array)

// 18. Using toLocaleString (Used for converting the array to a localized string)
const localizedString = numbers.toLocaleString(); // Converts the numbers array to a localized string
console.log(localizedString); // Output: '5, 4, 3, 2, 1' (localized string representation of the array)

// 19. Using sort with a custom comparator (Used for sorting the array with a custom function)
const customSortedNumbers = numbers.sort(function(a, b) {
    return a - b; // Sorts the numbers array in ascending order
});
console.log(customSortedNumbers); // Output: [1, 2, 3, 4, 5] (sorted array in ascending order)


