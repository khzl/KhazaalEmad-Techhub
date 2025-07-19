// Explain Big O Notation
// Big O Notation is a mathematical notation used to describe the performance or complexity of an algorithm
// It provides an upper bound on the time or space complexity in terms of the size of the input data
// Big O Notation is expressed as O(f(n)), where f(n) is a function that describes the growth rate of the algorithm
// Common Big O Notations include:
// O(1) - Constant time complexity
// O(log n) - Logarithmic time complexity
// O(n) - Linear time complexity
// O(n log n) - Linearithmic time complexity
// O(n^2) - Quadratic time complexity
// O(2^n) - Exponential time complexity
// O(n!) - Factorial time complexity

// Big O Notation helps in analyzing the efficiency of algorithms and comparing different algorithms based on their performance
// It is important to note that Big O Notation focuses on the worst-case scenario, which means it describes the maximum time or space an algorithm can take for a given input size
// It is widely used in computer science and software engineering to evaluate the scalability and efficiency of algorithms
// Big O Notation is crucial for understanding how algorithms perform as the input size grows, and it helps developers make informed decisions about which algorithms to use in their applications
// Big O Notation is not concerned with the actual time taken by an algorithm, but rather with how the time or space requirements grow as the input size increases
// It provides a high-level understanding of the algorithm's efficiency without getting into implementation details
// Big O Notation is a powerful tool for analyzing algorithms and understanding their performance characteristics
// It allows developers to make informed decisions about algorithm selection and optimization based on the expected input size
// Big O Notation is a fundamental concept in computer science and is essential for anyone working with algorithms and data structures
// Big O Notation is a way to express the efficiency of algorithms in terms of time and space complexity
// It provides a way to analyze how the performance of an algorithm scales with the size of the input data
// Big O Notation is a mathematical representation of the upper bound of an algorithm's performance
// It helps in understanding the worst-case scenario of an algorithm's performance


// What is Big O Notation?
// Big O Notation is a mathematical notation used to describe the performance or complexity of an algorithm
// It provides an upper bound on the time or space complexity in terms of the size of the input data
// Big O Notation is expressed as O(f(n)), where f(n) is a function that describes the growth rate of the algorithm
// Common Big O Notations include:
// O(1) - Constant time complexity
// O(log n) - Logarithmic time complexity
// O(n) - Linear time complexity
// O(n log n) - Linearithmic time complexity
// O(n^2) - Quadratic time complexity
// O(2^n) - Exponential time complexity
// O(n!) - Factorial time complexity

// How Does The Algorithm Behave as The input grows ?
// Big O Notation helps in analyzing the efficiency of algorithms and comparing different algorithms based on their performance
// It is important to note that Big O Notation focuses on the worst-case scenario, which means it describes the maximum time or space an algorithm can take for a given input size
// It is widely used in computer science and software engineering to evaluate the scalability and efficiency of algorithms

// why is big O notation important?
// Big O Notation is crucial for understanding how algorithms perform as the input size grows, and it helps developers make informed decisions about which algorithms to use in their applications

// Common Big O Notations (with examples):
// O(1) - Constant time complexity
// Example: Accessing an element in an array by index
array = [1, 2, 3, 4, 5];
console.log(array[2]); // Accessing the third element, which takes constant time regardless of the size of the array
// O(log n) - Logarithmic time complexity
// Example: Binary search in a sorted array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

// O(n) - Linear time complexity
// Example: Finding an element in an unsorted array
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found the target
        }
    }
    return -1; // Target not found
}

// O(n log n) - Linearithmic time complexity
// Example: Efficient sorting algorithms like mergesort and heapsort
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort left half
    const right = mergeSort(arr.slice(mid)); // Sort right half
    return merge(left, right); // Merge sorted halves
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // Append any remaining elements from either half
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// O(n^2) - Quadratic time complexity
// Example: Bubble sort or insertion sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; // Return sorted array
}
// O(2^n) - Exponential time complexity
// Example: Solving the Tower of Hanoi problem
function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, target); // Move n-1 disks from source to auxiliary
    console.log(`Move disk ${n} from ${source} to ${target}`); // Move nth disk from source to target
    towerOfHanoi(n - 1, auxiliary, target, source); // Move n-1 disks from auxiliary to target
}
// O(n!) - Factorial time complexity
// Example: Generating all permutations of a set
function generatePermutations(arr) {
    const results = [];
    backtrack(arr, [], results);
    return results;
}
function backtrack(remaining, current, results) {
    if (remaining.length === 0) {
        results.push([...current]);
        return;
    }
    for (let i = 0; i < remaining.length; i++) {
        const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
        current.push(remaining[i]);
        backtrack(next, current, results);
        current.pop();
    }
}
// Big O Notation helps in analyzing the efficiency of algorithms and comparing different algorithms based on their performance
// It is important to note that Big O Notation focuses on the worst-case scenario, which means it describes the maximum time or space an algorithm can take for a given input size
// It is widely used in computer science and software engineering to evaluate the scalability and efficiency of algorithms

//summary
// Big O Notation is crucial for understanding how algorithms perform as the input size grows, and it provides a high-level understanding of their efficiency. By analyzing the time and space complexity of algorithms, developers can make informed decisions about which algorithms to use in different scenarios.
// Big O Notation is a powerful tool for analyzing algorithms and understanding their performance characteristics
// It allows developers to make informed decisions about algorithm selection and optimization based on the expected input size
