function TwoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(TwoSum([2,7,11,15],9));
console.log(TwoSum([4,7,2,15],9));


function TwoSum(numbers, target) {
    for (let index = 0; index < numbers.length; index++) {
        const complement = target - numbers[index];
        const indices = numbers.indexOf(complement);
        if (indices !== -1 && indices !== index) {
            return [index, indices];
        }
    }
    return [];
}

console.log(TwoSum([1,2,3,4,6],6));