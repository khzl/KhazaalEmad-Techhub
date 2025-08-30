/* 
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the
left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is @ 
because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.
Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum nums[0] + nums [1] + nums [2] = 1 + 7 + 3 = 11
Right sum nums[4] + nums[5] = 5 + 6 = 11
Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
*/

let nums = [1,7,3,6,5,6];
function PivotIndex(nums)
{
    let TotalSum = nums.reduce((accumlator,currentValue) =>
    accumlator + currentValue, 0);

    let LeftSum = 0;

    for (let index = 0; index < nums.length; index++)
    {
        if (LeftSum === TotalSum - LeftSum - nums[index])
        {
            return index;
        }
        LeftSum += nums[index];
    }
    return -1;
}

console.log(PivotIndex([1,7,3,6,5,6]));
console.log(PivotIndex([1,2,3]));
console.log(PivotIndex([2,4,2]));