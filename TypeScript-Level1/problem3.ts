function removeDuplicateCharacters(str: string): string {
    let seen = new Set<string>();
    let result = '';
    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

// Example usage:
const input = "programming";
console.log(removeDuplicateCharacters(input)); // Output: "progamin"