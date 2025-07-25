let nums = [1,7,3,6,5,6];

function FindPivot(num)
{
    leftNum = num[0] + num[1] + num[2];
    RightNum = num[4] + num[5];
    if (leftNum == RightNum)
    {
        pivot = num[3];
    }
}

let PivotNumber = FindPivot(nums);
console.log(Pivot);