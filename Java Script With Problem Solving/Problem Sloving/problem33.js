
function ShiftNonZeroElement(nums)
{
    let result = [];
    for(let row = 0 ; row < nums.length ; row++)
    {
        if (nums[row] !== 0)
        {
            result.push(nums[row]);
        }
    }
    
    while(result.length < nums.length) {
        result.push(0);
    }
    return result;
}

console.log(ShiftNonZeroElement([0,1,0,3,12]));
// Expected Output [1,3,12,0,0];