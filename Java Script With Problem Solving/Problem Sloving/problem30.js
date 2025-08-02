// Find the index of the first character Occurrence in a string

function FindIndexForFirstCharacter(haystack,niddle)
{
    let index = haystack.indexOf(niddle);
    return index;
}

function FindIndexForFirstCharacterManual(haystack,niddle)
{
    if (niddle === "")
        return 0;
    for (let index = 0; index < haystack.length - niddle.length; index++)
    {
        let subStr = haystack.substring(index,index + niddle.length);
        if(subStr === niddle)
        {
            return index;
        }
    }
    return -1; // Not found 
}

console.log(FindIndexForFirstCharacterManual("sadBurset","sad"));

console.log(FindIndexForFirstCharacter("sadBurest","sadB"));
console.log(FindIndexForFirstCharacter("hello","ll"));