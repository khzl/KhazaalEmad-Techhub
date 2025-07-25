/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
function IsPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(IsPalindrome(121)); // true
console.log(IsPalindrome(345));
console.log(IsPalindrome(343));
