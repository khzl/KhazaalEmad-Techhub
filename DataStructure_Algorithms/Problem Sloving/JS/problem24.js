// find The index of a specific target value 
function FindIndexOfTarget(nums,target)
{
    for (let index = 0; index < nums.length; index++)
    {
        if (nums[index] === target)
        {
            return index;
        }
    }
    return -1;
}

console.log(FindIndexOfTarget([1,3,5,6],5));
console.log(FindIndexOfTarget([1,32,5,5],32));
// Expected Output index = 2;