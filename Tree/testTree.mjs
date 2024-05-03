import BinarySearchTree from "./binarySearchTree.mjs";

const bst = new BinarySearchTree();
bst.buildTreeBySortedArr([3, 4, 5, 6, 7]);
// bst.buildTreeBySortedList(head);
// bst.inorderRecursive();
bst.inorderIterative();
bst.searchNode(-1);
bst.searchNodeIterative(5);
bst.levelOrderTraversal();
bst.insertNode(1);
console.log('after insert 1');
bst.inorderIterative();
bst.deleteNodeByVal(5);
console.log('after delete node');
bst.inorderIterative();

// bst.flatternByStack();
// bst.flatternRecursive();



