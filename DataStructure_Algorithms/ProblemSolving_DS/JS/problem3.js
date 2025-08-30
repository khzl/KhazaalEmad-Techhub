function FindMaximumNumberOfSubArray(array, key) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd];

        if (windowEnd >= key - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= array[windowStart];
            windowStart++;
        }
    }

    return maxSum;
}

console.log(FindMaximumNumberOfSubArray([2,1,5,1,3,2],3)); // Output = 9
console.log(FindMaximumNumberOfSubArray([2,3,4,1,5],2));