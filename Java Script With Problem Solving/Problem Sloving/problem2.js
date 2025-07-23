function IsPalindrome(num) {
    let str = num.toString();
    let reversed = str.reverse();
    return str === reversed;
}

let num = 121;
let result = IsPalindrome(num);
console.log(result); // true
