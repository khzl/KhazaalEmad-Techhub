// Find The Largest Number in an Array
function findLargestNumber(arr) {
    let Largest = arr[0];
    for (let i = 1; i < arr.length;i++)
    {
        if (arr[i] > Largest)
        {
            Largest = arr[i];
        }
    }
    return Largest;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1, 4];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);

// Find The Smallest Number in an Array
function findSmallestNumber(arr) {
    let Smallest = arr[0];
    for (let i = 1; i < arr.length;i++)
    {
        if (arr[i] < Smallest)
        {
            Smallest = arr[i];
        }
    }
    return Smallest;
}
// Example usage:
const numbers2 = [3, 5, 7, 2, 8, -1, 4];
const smallestNumber = findSmallestNumber(numbers2);
console.log("The smallest number is:", smallestNumber);



// Find The Average of Numbers in an Array
