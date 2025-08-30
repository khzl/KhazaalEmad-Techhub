function MoveZeroToEnd(arr)
{
    let result = [];
    for(let row = 0; row < arr.length; row++)
    {
        if (arr[row] !== 0)
        {
            result.push(arr[row]);
        }
    }

    let ZeroCount = arr.length - result.length;
    for (let row = 0; row < ZeroCount; row++)
    {
        result.push(0);
    }
    return result;
}

console.log(MoveZeroToEnd([0,1,0,3,12]));
console.log(MoveZeroToEnd([0,1,2,0,8]));
// Expected Output [1,3,12,0,0];