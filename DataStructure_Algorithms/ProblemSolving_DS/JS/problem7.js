function FindTheLengthOfTheSmallestSubArray(array, sliding) {
    let windowSum = 0;
    let windowStart = 0;
    let minLength = Infinity;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd];

        while (windowSum >= sliding) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= array[windowStart];
            windowStart++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(FindTheLengthOfTheSmallestSubArray([2,1,5,2,3,2],7)); // Expected Output 2
console.log(FindTheLengthOfTheSmallestSubArray([2,1,5,2,8],7)); // Expected Output 1