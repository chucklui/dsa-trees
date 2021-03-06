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
    let toVisitQueue= [node];
    let minDepth = 0;

    while (toVisitQueue[0]) {
      let current = toVisitQueue.shift();
      minDepth++;
      if (current.left === null && current.right === null) return minDepth;

      if (current.left !== null) {
        toVisitQueue.push(current.left);
      }
      
      if (current.right !== null) {
        toVisitQueue.push(current.right);
      }
    }
    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;

    return Math.max(
      this.maxDepth(node.left),
      this.maxDepth(node.right)
    ) + 1;
}
  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root, largerNums=[]) {
    if (!node) return null;
    if(node.val > lowerBound) {
      largerNums.push(node.val);
    }
    this.nextLarger(lowerBound, node.left, largerNums);  
    this.nextLarger(lowerBound, node.right, largerNums);  
    return largerNums.length === 0 ? null : Math.min(...largerNums);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };

