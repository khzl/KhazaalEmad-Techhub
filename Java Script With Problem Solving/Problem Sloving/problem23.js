/* 
Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:
arr.length >= 3
There exists some i with 0 < i < arr.length 1 such that:
< arr[i - 1] < arr[i] arr[0] < arr[1] <
arr[i] > arr[i + 1]> ...> arr[arr.length - 1]
*/

function ValidMountainArray(arr)
{
    const num = arr.length;

    if (num < 3)
        return false;

    let index = 0;

    while (index + 1 < num && arr[index] < arr[index + 1])
    {
        index++;
    }

    if (index === 0 || index === num -1)
        return false;

    while (index + 1 < num && arr[index] > arr[index + 1])
    {
        index++;
    }

    return index === num - 1;
}

console.log(ValidMountainArray([1,3,5,4,2]));