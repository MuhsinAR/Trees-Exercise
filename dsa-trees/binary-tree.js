/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(node = this.root) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 1;
    
    const leftDepth = node.left ? this.minDepth(node.left) : Infinity;
    const rightDepth = node.right ? this.minDepth(node.right) : Infinity;
    
    return 1 + Math.min(leftDepth, rightDepth);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth(node = this.root) {
    if (node === null) return 0;
    const leftDepth = node.left ? this.maxDepth(node.left) : 0;
    const rightDepth = node.right ? this.maxDepth(node.right) : 0;
    return 1 + Math.max(leftDepth, rightDepth);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    // Implement maxSum function
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound, node = this.root) {
    if (node === null) return null;
    if (node.value <= lowerBound) {
      return this.nextLarger(lowerBound, node.right);
    } else {
      const leftResult = this.nextLarger(lowerBound, node.left);
      return leftResult !== null ? leftResult : node.value;
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */
  areCousins(node1, node2) {
    // Implement areCousins function
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */
  static serialize(tree) {
    // Implement serialize function
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  static deserialize(stringTree) {
    // Implement deserialize function
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */
  lowestCommonAncestor(node1, node2) {
    // Implement lowestCommonAncestor function
  }
}


module.exports = { BinaryTree, BinaryTreeNode };
