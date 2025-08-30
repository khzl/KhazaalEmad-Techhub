class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createLinkedList(array) {
    if (array.length === 0) 
        return null;
    let head = new Node(array[0]);
    let current = head;
    for (let index = 1; index < array.length; index++) {
        current.next = new Node(array[index]);
        current = current.next;
    }
    return head;
}

function IsPalindrome(numbers) {
    let head = createLinkedList(numbers);
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let previous = null, current = slow;
    while (current) {
        let nextTemp = current.next;
        current.next = previous;
        previous = current;
        current = nextTemp;
    }

    let first = head, second = previous;
    while (second) {
        if (first.value !== second.value)
             return false;
        first = first.next;
        second = second.next;
    }
    return true;
}

console.log(IsPalindrome([1,2,2,1])); 
console.log(IsPalindrome([1,2]));     
console.log(IsPalindrome([1,2,2,-1,-2]));