function CountLastWord(str)
{
    
    let i = str.length - 1;
    while (i >= 0 && str[i] === ' ') {
        i--;
    }
    
    let end = i;
    
    while (i >= 0 && str[i] !== ' ') {
        i--;
    }
    let start = i + 1;
    
    let lastWord = '';
    for (let j = start; j <= end; j++) {
        lastWord += str[j];
    }
    return lastWord;
}

let str = "  fly  me   to the moon ";
let LastWord = CountLastWord(str);
console.log(LastWord);