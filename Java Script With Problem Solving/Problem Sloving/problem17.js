/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums [0] + nums[1] = 9, we return [0, 1].

*/

function TwoSum(nums,target)
{
    const map = new Map();
    for (let index = 0 ; index < nums.length ; index++)
    {
        const Complement = target - nums[index];

        if (map.has(Complement))
        {
            return [map.get(Complement),index];
        }
        map.set(nums[index],index);
    }
    return [];
}
console.log(TwoSum([2,7,11,15],9));
console.log(TwoSum([3,6,11,15],9));
console.log(TwoSum([3,2,5,4],9));
