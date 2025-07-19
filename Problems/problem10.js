function StringValidation(word)
{
    let characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let characterLowerCase = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let SpecialCharacter = "!@#$%^&*()";
   
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecialCaracter = false;

    for (let i = 0; i < word.length; i++) 
    {
        if (characterUpperCase.includes(word[i])) 
            hasUpper = true;
        if (characterLowerCase.includes(word[i]))
             hasLower = true;
        if (digits.includes(word[i])) 
            hasDigit = true;
        if (SpecialCharacter.includes(word[i]))
            hasSpecialCaracter = false;
    }

    return hasUpper && hasLower && hasDigit;
}

//let word = StringValidation("234Adas");
console.log(StringValidation("234Adas"));
console.log(StringValidation("234Adasads"));
console.log(StringValidation("nbSHFi%$"));
console.log(StringValidation("nbbi*&$"));