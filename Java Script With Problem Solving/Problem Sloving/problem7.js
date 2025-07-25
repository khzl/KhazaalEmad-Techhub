/*
 2. Draw a triangle with stars using 2D
input
javascriptheight = 5
Output:
*
***
*****
*******
*********
*/

function DrawTriangleWithStarUsing2D()
{
    let height = 5;
    for (let row  = 0 ; row < height; row++)
    {
        let stars = '';
        for (let column = 0; column < 2 * row + 1; column++)
        {
            stars += '*';
        }
        console.log(stars);
    }
}

console.log(DrawTriangleWithStarUsing2D());