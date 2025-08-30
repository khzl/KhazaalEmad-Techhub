let array = new Array(5);
array = [1,2,3];
console.log(array);
console.log(array.length);


//-------------------------------------

let arr = [1,5,4,3,2];

function FindIndexTwo(arr)
{
    let IndexTwo = [];
    for (let index = 0; index < arr.length ; index++)
    {
        if (arr[index] === arr[2])
        {
            IndexTwo = arr[index];
        }
    }
    return IndexTwo;
}

console.log(FindIndexTwo(arr));

