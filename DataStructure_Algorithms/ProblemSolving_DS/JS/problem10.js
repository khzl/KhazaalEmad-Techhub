function MergeTwoString(Word1, Word2) {
    let result = '';
    let maxLength = Math.max(Word1.length, Word2.length);
    for (let index = 0; index < maxLength; index++) {
        if (index < Word1.length)
             result += Word1[index];
        if (index < Word2.length)
             result += Word2[index];
    }
    return result;
}

console.log(MergeTwoString("abc","pqr"));   // apbqcr
console.log(MergeTwoString("ab","pqrs"));   // apbqrs
console.log(MergeTwoString("abcd","pq"));   // apbqcd
