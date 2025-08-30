function CountLargestElementForNumberOne(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
}

console.log(CountLargestElementForNumberOne([1,0,1,1,0,1]));
console.log(CountLargestElementForNumberOne([1,1,0,1,1,1])); // Output: 3