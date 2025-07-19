function FindMissingLetterIn(Letters) {
    for (let i = 0; i < Letters.length - 1; i++) {
        const currentCode = Letters[i].charCodeAt(0);
        const nextCode = Letters[i + 1].charCodeAt(0);
        if (nextCode - currentCode > 1) {
            return String.fromCharCode(currentCode + 1);
        }
    }
    return null; // No missing letter
}
// Example usage:
console.log(FindMissingLetterIn(["a", "b", "c", "e"])); // Output: d