// function Isanagram(str1, str2) {

//   if (str1.length !== str2.length) 
//     return false;

//   const Sortedstr1 = str1.split('').sort().join('');
//   const Sortedstr2 = str2.split('').sort().join('');

//   return Sortedstr1 === Sortedstr2;

// }

// console.log(Isanagram("Khazaal", "hazKaal"));

// Expected Output True If Equavilant Or False Is Not
//-----------------------------------------------------------

// Faster Method

function IsAnagram(str1,str2){
    if (str1.length !== str2.length)
        return false;

    const count = {};

    for (let char of str1){
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2)
    {
        if (!count[char])
            return false;
        count[char]--;
    }
    return true;
}

console.log(IsAnagram("Khazaal","hazKaal"));
console.log(IsAnagram("Car","rat"));

