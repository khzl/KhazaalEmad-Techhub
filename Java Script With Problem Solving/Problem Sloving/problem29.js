
function TwoSum(num,target)
{
    const map = {}; // Store Number`s we`ve seen
    for (let index = 0; index < num.length; index++)
    {
        let Complement = target - num[index];

        if(map[Complement] !== undefined)
        {
            return [map[Complement],index];
        }
        map[num[index]] = index; // Store The Index Of The Current Number
    }
    return [];
}

console.log(TwoSum([2,7,11,15],9));
console.log(TwoSum([1,7,2,15],9));
// expected output index 2 beacuse index[0] + index[1] = 9