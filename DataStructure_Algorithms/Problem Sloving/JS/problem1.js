array = [1,2,3,4,5];
function SumOfArray(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length;i++)
    {
        sum += arr[i];
    }
    return sum;
}

let Sum = SumOfArray(array);
console.log("Sum: " + Sum);