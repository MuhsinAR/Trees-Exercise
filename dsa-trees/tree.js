/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues(node = this.root) {
    if (node === null) return 0;
    return node.value + this.sumValues(node.left) + this.sumValues(node.right);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens(node = this.root) {
    if (node === null) return 0;
    let count = node.value % 2 === 0 ? 1 : 0;
    count += this.countEvens(node.left);
    count += this.countEvens(node.right);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound, node = this.root) {
    if (node === null) return 0;
    let count = node.value > lowerBound ? 1 : 0;
    count += this.numGreater(lowerBound, node.left);
    count += this.numGreater(lowerBound, node.right);
    return count;
  }
}


module.exports = { Tree, TreeNode };
