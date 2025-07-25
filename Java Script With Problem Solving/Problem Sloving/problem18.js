/* 
 A word is considered valid if:
It contains a minimum of 3 characters.
It contains only digits (0-9), and English letters (uppercase and lowercase).
It includes at least one vowel.
It includes at least one consonant.
You are given a string word.
Return true if word is valid, otherwise, return false.
Notes:
'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
A consonant is an English letter that is not a vowel.
Example 1:
Input: word = "234Adas"
Output: true
Explanation:
This word satisfies the conditions.
*/

function IsValidWord(word)
{
    if (word.length < 3)
        return false;
    if (!/^[a-zA-Z0-9]+$/.test(word))
        return false;

    const Vowels = /[aeiouAEIOU]/;
    const Consonants = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/;

    if (!Vowels.test(word))
        return false;
    if (!Consonants.test(word))
        return false;

    return true;
}

console.log(IsValidWord("ADS123asd"));
console.log(IsValidWord("35ght%"));
console.log(IsValidWord("as32"));
console.log(IsValidWord("90%^$^%"));