// Big O Notation
// Big O Notation is a way to describe the performance or complexity of an algorithm.
// It provides an upper bound on the time or space complexity in terms of the size of the input.
// Common Big O Notations:
// O(1) - Constant time: The algorithm takes the same amount of time regardless of the input size.
// O(log n) - Logarithmic time: The algorithm's time grows logarithmically as the input size increases.
// O(n) - Linear time: The algorithm's time grows linearly with the input size
// O(n log n) - Linearithmic time: The algorithm's time grows in a combination of linear and logarithmic factors.
// O(n^2) - Quadratic time: The algorithm's time grows quadratically with
// the input size, often seen in algorithms with nested loops.
function constantTime(arr) {
  // O(1)
  return arr[0]; // Accessing the first element takes constant time
}

function logarithmicTime(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}