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

    deleteOddNodesAndCreateNew() {
        const newLinkList = new LinkList();
        while (this.head !== null) {
            //1. if head is not null, make next of head as
            //   new head and delete previous head
            newLinkList.insertNode(this.head.val);
            this.head = this.head.next;
            if (this.head !== null) {
                //2. if the new head is not null create 
                //   nodes - evenNode and oddNode
                let evenNode = this.head;
                let oddNode = this.head.next;

                while (evenNode !== null && oddNode !== null) {
                    newLinkList.insertNode(oddNode.val);

                    evenNode.next = oddNode.next;
                    evenNode = evenNode.next;

                    if (evenNode !== null) {
                        oddNode = evenNode.next;
                        // newLinkList.insertNode(oddNode.val);
                    }
                }
            }
        }

        return newLinkList;
    }

    deleteOddNodes() {
        if (this.head !== null) {
            //1. if head is not null, make next of head as
            //   new head and delete previous head
            this.head = this.head.next;
            if (this.head !== null) {
                //2. if the new head is not null create 
                //   nodes - evenNode and oddNode
                let evenNode = this.head;
                let oddNode = this.head.next;

                while (evenNode !== null && oddNode !== null) {
                    evenNode.next = oddNode.next;
                    evenNode = evenNode.next;

                    if (evenNode !== null) {
                        oddNode = evenNode.next;
                    }
                }
            }
        }
    }

    getHead() {
        return this.head;
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