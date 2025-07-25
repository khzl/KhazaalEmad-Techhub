let array = [1,2,3,4,5,3,2];

function montainArray(arr)
{
    let MontainArr = arr[0];
    for (let row = 0;row < arr.length;row++)
    {
        if (0 < row < arr.length - 1)
            return MontainArr;

    }
}
// Call Function Inside Console.log
console.log(montainArray(array));