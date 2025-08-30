function SortedArrayWithSquareNumber(array) {
    let number = array.length;
    let result = new Array(number);
    let left = 0, right = number - 1;
    let position = number - 1;

    while (left <= right) {
        let leftSquare = array[left] * array[left];
        let rightSquare = array[right] * array[right];
        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }
        position--;
    }
    return result;
}

console.log(SortedArrayWithSquareNumber([-2, -1, 0, 2, 3]));
// Expected Output [0,1,4,4,9];