function DrawTriangleWithStarUsing2D(Array2D)
{
    let result = '';
    for (let i = 0 ; i < Array2D.length ; i++)
    {
        result += Array2D[i].join('') + '\n';
    }
    return result;
}

let Array2D = [['*'],
               ['*','*','*'],
               ['*','*','*','*','*'],
               ['*','*','*','*','*','*','*'],
               ['*','*','*','*','*','*','*','*','*']];
let DrawTriangle = DrawTriangleWithStarUsing2D(Array2D);
console.log(DrawTriangle);