/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }

    let prev = null;
    function inorder(root) {
        if (root === null) {
            return true;
        }

        if (!inorder(root.left)) {
            return false;
        }
        if (prev !== null && prev.val >= root.val) {
            return false;
        }

        prev = root;
        
        return inorder(root.right);
    }

    return inorder(root);
};