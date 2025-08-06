
function TrianglePackal(numOfRows)
{
    let result = [];
    for (let row = 0; row < numOfRows; row++)
    {
        let line = [];
        for (let column = 0; column <= row; column++)
        {
            if (column === 0 || column === row) {
                line.push(1);
            } else {
                line.push(result[row - 1][column - 1] + result[row - 1][column]);
            }
        }
        result.push(line);
    }
    return result;
}

console.log(TrianglePackal(5));
// Expected Output [1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]