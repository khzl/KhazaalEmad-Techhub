function characterfrequencyCount(str) {
    if (!str) return {}; // Return empty object for empty input
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(characterfrequencyCount("Khazaal"));