function characterFrequencyCount(str)
{
    const frequency = {};
    for (let char of str) {
        if (frequency[char]) {
        frequency[char]++;
        } else {
        frequency[char] = 1;
        }
    }
    return frequency;
}

console.log(characterFrequencyCount("Khazaal")); // { K: 1, h: 1, a: 3, z: 1, l: 1 }

// Chaaracter Frequency Count Problem using Hash Map
function characterFrequencyCountWithMap(str)
{
    const frequencyMap = new Map();
    for (let char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }
    return frequencyMap;
}
console.log(characterFrequencyCountWithMap("Khazaal")); // Map(5) { 'K' => 1, 'h' => 1, 'a' => 3, 'z' => 1, 'l' => 1 }
console.log(characterFrequencyCountWithMap([1, 2, 3, 1, 2, 4])); // Map(4) { 1 => 2, 2 => 2, 3 => 1, 4 => 1 }
console.log(characterFrequencyCountWithMap(['a', 'b', 'c', 'a', 'b'])); // Map(3) { 'a' => 2, 'b' => 2, 'c' => 1 }