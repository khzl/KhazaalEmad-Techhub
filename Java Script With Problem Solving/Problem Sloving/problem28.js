
function FindMissingNumber(nums)
{
    let num = nums.length;
    let ExpectedSum = num * (num + 1) / 2;
    let ActualSum = 0;

    for (let index = 0; index < nums.length; index++)
    {
        ActualSum += nums[index];
    }
    return ExpectedSum - ActualSum;
}

console.log(FindMissingNumber([3,0,1]));
// Expected Output 2