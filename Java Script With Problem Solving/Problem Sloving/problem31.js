let num1 = [1,2,3,0,0],m = 3;
let num2 = [2,5,6],n = 3;

function mergeSortedArrays(nums1, m, nums2, n) {
    // Pointers 
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let mergepointer = m + n - 1;

    while (pointer1 >= 0 && pointer2 >= 0) {
        if (nums1[pointer1] > nums2[pointer2]) {
            nums1[mergepointer] = nums1[pointer1];
            pointer1--;
        } else {
            nums1[mergepointer] = nums2[pointer2];
            pointer2--;
        }
        mergepointer--;
    }
    while (pointer2 >= 0) {
        nums1[mergepointer] = nums2[pointer2];
        mergepointer--;
        pointer2--;
    }
    return nums1;
}

console.log(mergeSortedArrays(num1,m,num2,n));
