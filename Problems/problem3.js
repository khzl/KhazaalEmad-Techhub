function FindMax(arr)
{

    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [100,4,499,5,49];
const maxNumber = FindMax(numbers);
console.log(maxNumber); // Output: 499