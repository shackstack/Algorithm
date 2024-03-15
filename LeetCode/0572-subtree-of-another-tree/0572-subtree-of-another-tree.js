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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
    if (equal(root, subRoot)) return true;
    if (root !== null) {
        if(isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot)) return true
    }
    
    return false;
};


const equal = (root, subRoot) => {
    if(root === null && subRoot === null) return true;
    if(root === null || subRoot === null) return false
    if(root.val !== subRoot.val) return false;

    return equal(root.left, subRoot.left) && equal(root.right, subRoot.right)
}