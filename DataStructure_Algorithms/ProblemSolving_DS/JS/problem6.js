function FindAllUniqueTriplets(numbers) {
    numbers.sort((num1, num2) => num1 - num2); 
    let result = [];

    for (let i = 0; i < numbers.length - 2; i++) {
        if (i > 0 && numbers[i] === numbers[i - 1]) continue;

        let left = i + 1;
        let right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[i] + numbers[left] + numbers[right];

            if (sum === 0) {
                result.push([numbers[i], numbers[left], numbers[right]]);
                
                // Skip duplicates for left & right
                while (left < right && numbers[left] === numbers[left + 1]) left++;
                while (left < right && numbers[right] === numbers[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(FindAllUniqueTriplets([-3,0,1,2,-1,1,-2])); 
// Expected Output [[-3,1,2],[-2,0,2],[-2,1,1],[-1,0,1]];
console.log(FindAllUniqueTriplets([-5,2,-1,-2,3]));
// Expected Output [[-5,2,3],[-2,-1,3]];

