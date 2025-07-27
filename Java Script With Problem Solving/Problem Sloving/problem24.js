

function FindIndexOfTarget(nums,target)
{
    let Target = nums[0];
    for (let index = 0; index < nums.length; index++)
    {
        if (nums[index] > Target)
        {
            Target = nums[index];
        }
    }
    return Target;
}

console.log(FindIndexOfTarget([1,3,5,6],5));