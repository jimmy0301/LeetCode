import TreeNode from "./treeNode.mjs";

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /*
        *** Build Tree ***
    */
    buildTreeBySortedArr(sortedArr) {
        function buildTree(sortedArr) {
            if (sortedArr <= 0) {
                return null;
            }

            if (sortedArr.length === 1) {
                return new TreeNode(sortedArr[0]);
            }

            const size = sortedArr.length;
            const mid = (~~(size / 2));
            const root = new TreeNode(sortedArr[mid]);
            root.left = buildTree(sortedArr.slice(0, mid));
            root.right = buildTree(sortedArr.slice(mid + 1));

            return root;
        }   
        this.root = buildTree(sortedArr);  
    }

    /**
        **
    **/

    buildTreeBySortedLinkedList(head) {
        if (head === null) {
            return null;
        }
    }

    insertNode(val) {
        // Find the right position
        let prevRoot = null;
        let currRoot = this.root;

        while (currRoot !== null) {
            if (currRoot.val === val) {
                console.log('The value has already exist');
                return;
            } else if (currRoot.val > val) {
                prevRoot = currRoot;
                currRoot = currRoot.left; 
            } else {
                prevRoot = currRoot;
                currRoot = currRoot.right;
            }
        }

        console.log('prev node insert', prevRoot);
        const newNode = new TreeNode(val);

        if (prevRoot.val > val) {
            prevRoot.left = newNode;
        } else {
            prevRoot.right = newNode; 
        }
    }


    deleteNodeByVal(val) {
        console.log('before delete', this.root);
        function deleteNodeByNode(root, val) {
            if (root === null) {
                return null;
            }

            if (root.val > val) {
                root.left = deleteNodeByNode(root.left, val);
            } else if (root.val < val) {
                root.right = deleteNodeByNode(root.right, val);
            } else {
                if (root.left === null) {
                    return root.right;
                } else if (root.right === null) {
                    return root.left;
                } else {
                    let currNode = root.right;

                    while (currNode.left !== null) {
                        currNode = currNode.left;
                    }

                    root.val = currNode.val;
                    root.right = deleteNodeByNode(root.right, currNode.val);
                }
            }

            return root;
        }

        deleteNodeByNode(this.root, val);
    }

    /*
        *** Search the node ***
    */
    searchNodeIterative(val) {
        let currRoot = this.root;

        while (currRoot !== null) {
            if (currRoot.val === val) {
                console.log('Found it');
                return currRoot;
            } else if (currRoot.val > val) {
                currRoot = currRoot.left;
            } else {
                currRoot = currRoot.right;
            }
        }

        console.log('Not Found');
        return null;
    }

    searchNode(val) {
        const node = new TreeNode(val);

        function search(root, TreeNode) {
            if (root === null) {
                return null;
            }

            if (root.val === TreeNode.val) {
                return root;
            }
            if (root.val > TreeNode.val) {
                return search(root.left, TreeNode);
            } else {
                return search(root.right, TreeNode);
            }
        }

        const result = search(this.root, node);
        if (result === null) {
            console.log('Not found');
        } else {
            console.log('Found it')
        }
    }

    /*
      *** Traversal ***  
    */
    levelOrderTraversal() {
        console.log('Tree', this.root);
        const queue = [this.root];

        while (queue.length > 0) {
            const qLen = queue.length;
            for (let i = 0; i < qLen; i += 1) {
                const node = queue.shift();

                if (node !== null) {
                    console.log('node val', node.val);
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
        }
    }
    inorderRecursive() {
        console.log('Inorder recursice start');
        function inorder(root) {
            if (root === null) {
                return;
            }

            inorder(root.left);
            console.log('node val', root.val);
            inorder(root.right);
        }
        
        inorder(this.root);
    }

    inorderIterative() {
        console.log('Inorder Iterative start');
        console.log('tree', this.root);
        let currRoot = this.root;
        const stack = [];

        while (currRoot !== null || stack.length > 0) {
            if (currRoot !== null) {
                stack.push(currRoot);
                currRoot = currRoot.left;
            } else {
                const node = stack[stack.length - 1];
                stack.pop();
                console.log('node val', node.val);
                currRoot = node.right;
            }
        }
    }

    /*
        *** Extra operation ***
    */
    flatternByStack() {
        // after flatterning, it will be a link list
        const stack = [this.root];

        while (stack.length > 0) {
            const treeNode = stack[stack.length - 1];
            stack.pop();

            if (treeNode !== null) {
                if (treeNode.right !== null) {
                    stack.push(treeNode.right);
                }

                if (treeNode.left !== null) {
                    stack.push(treeNode.left);
                }

                if (stack.length > 0) {
                    treeNode.right = stack[stack.length - 1];
                }

                treeNode.left = null;
            }
        }
    }

    flatternRecursive() {
        function flattern(root) {
            if (root === null) {
                return;
            }

            flattern(root.left);
            flattern(root.right);

            const left = root.left;
            const right = root.right;

            root.left = null;
            root.right = left;

            let temp = root;
            while (temp !== null && temp.right !== null) {
                temp = temp.right;
            }

            temp.right = right;
        }

        flattern(this.root);
    }

    flatternIterative() {

    }
}

export default BinarySearchTree;