function IsPalindrome(num) {
    let original = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}

console.log(IsPalindrome(121)); 
console.log(IsPalindrome(456));
console.log(IsPalindrome(342));