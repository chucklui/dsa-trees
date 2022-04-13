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

  sumValues() {
    let toVisitStack = [this.root];
    let sum = 0;

    while (toVisitStack[0]) {
      let current = toVisitStack.pop();
      sum += current.val;

      for (let child of current.children)
        toVisitStack.push(child)
    }
    
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack= [this.root];
    let evenCounts = 0;

    while (toVisitStack[0]) {
      let current = toVisitStack.pop();
      if (current.val % 2 === 0) evenCounts++;

      for (let child of current.children)
        toVisitStack.push(child)
    }
    
    return evenCounts;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitStack= [this.root];
    let counts = 0;

    while (toVisitStack[0]) {
      let current = toVisitStack.pop();
      if (current.val > lowerBound) counts++;

      for (let child of current.children)
        toVisitStack.push(child)
    }
    
    return counts;
  }
}

module.exports = { Tree, TreeNode };
