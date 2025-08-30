function FindAverageOfEachSubArray(array, key) {
    const result = [];
    let windowSum = 0, windowStart = 0;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd]; 

        
        if (windowEnd >= key - 1) {
            result.push(windowSum / key); 
            windowSum -= array[windowStart]; 
            windowStart++; 
        }
    }

    return result;
}

console.log(FindAverageOfEachSubArray([1,3,2,6,-1,4,1,8,2],5));
// Expected Output [2.2, 2.8, 2.4, 3.6, 2.8]