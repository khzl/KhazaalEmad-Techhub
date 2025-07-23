// remove duplicates from an array
function removeDuplicates(arr)
{
    // Create a new Set from the array to remove duplicates
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}

const numbers = [1,5, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
const strings = ["apple","banana","apple","orange"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]
const Strings1 = ["apple","banana","orange","apple","mango","banana"];
const uniqueStrings1 = removeDuplicates(Strings1);
console.log(uniqueStrings1); // Output: ["apple", "banana", "orange", "mango"]