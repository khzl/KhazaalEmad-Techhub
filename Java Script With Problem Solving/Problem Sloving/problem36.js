function FindNumberIsNotFrequency(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let num in freq) {
        if (freq[num] === 1) {
            return Number(num);
        }
    }
    return null; 
}
console.log(FindNumberIsNotFrequency([2,2,1]));
console.log(FindNumberIsNotFrequency([4,1,2,1,2]));
console.log(FindNumberIsNotFrequency([4,1,2,1,2,4,5]));
