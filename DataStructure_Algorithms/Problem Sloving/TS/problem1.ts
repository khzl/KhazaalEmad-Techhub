import type NumberArray from "./Types/NumberArray";

let Array: NumberArray = [1,2,3,4,5];

function SumOfArray(array: NumberArray): number {
    let sum: number = 0;
    for (let index = 0 ; index < array.length; index++)
    {
        sum += array[index];
    }
    return sum;
}

let Sum: number = SumOfArray(Array);
console.log("Sum: " + Sum);