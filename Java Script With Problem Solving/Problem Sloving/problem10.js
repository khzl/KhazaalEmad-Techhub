const matrix =
[
    [3,7,2,9,1],
    [15,4,8,12,6],
    [20,11,5,18,14],
    [2,25,9,13,7]
];


function FindMaxNumberIn2DArray(matrix)
{
    let Max = matrix[0][0];
    let maxArray = [];
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] > Max)
            {
                Max = matrix[i][j]
            }
        }
        maxArray.push(Max);
    }
    return maxArray;
}

const MaxNumber = FindMaxNumberIn2DArray(matrix);
console.log(MaxNumber);
