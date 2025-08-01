let num1 = [1,2,3,0,0];
let num2 = [2,5,6];

function MergeTwoNum(nums1,nums2)
{
    let Merge = [];
    let m = 3,n=3;
    let result = nums1.concat(nums2);
    result.sort((num1,num2) => num1 !== m - 1 && num2 !== n - 1);
    Merge.push(result);
    return Merge;
}

console.log(MergeTwoNum(num1,num2));