class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next;
    }
}

module.exports = class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.head !== null) {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    printLinkList() {
        let ptr = this.head;

        let str = '';
        while (ptr !== null) {
            str += `${ptr.val}-->`;
            ptr = ptr.next;
        }

        str += 'null';
        console.log(str);
    }
}