function FirstPalindromic(Words) {
    for (let index = 0; index < Words.length; index++) {
        let word = Words[index];
        let isPalindrome = true;
        let len = word.length;
        for (let j = 0; j < len / 2; j++) {
            if (word[j] !== word[len - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            return word;
        }
    }
    return "";
}

console.log(FirstPalindromic(["abc","car","ada","racecar","cool"]));
// Expected Output "ada";
console.log(FirstPalindromic(["hospitalPalindrome","racecar"]));
// Expected Output "raceCar"
console.log(FirstPalindromic(["def","ghi"]));
// Expected Output ""