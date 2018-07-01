# Binary Tree Traversal
## Travis Badge
[![Build Status](https://travis-ci.org/ashtonkellis/15-BinaryTree.svg?branch=master)](https://travis-ci.org/ashtonkellis/15-BinaryTree)

## Challenge
* Implement an **in-order** traversal function that returns a string of the visited node's values.
      * For example : `6,8,7,9,2,1,4,3,5`

## to use this code
```
import 'BinaryTree';

const myBT = new BinaryTree();

 // to append a value to the binary tree
 // Big O Time: O(h), where h is the height of the tree
 // Big O Space: O(h)
myBT.append(value);

// to in-order traverse the tree and apply a callback function
 // Big O Time: O(n)
 // Big O Space: O(h)
myBT.inOrder(callback);

// to return a string of the values of the nodes, traversed in-order
 // Big O Time: O(n)
 // Big O Space: O(n)
myBT.inOrderString();
```

## Code Solution
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    }

    if (value > this.value) {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  inOrder(callback) {
    if (this.left) this.left.inOrder(callback);
    callback(this.value);
    if (this.right) this.right.inOrder(callback);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.insert(value);
    }
  }
  
  inOrder(callback) {
    if (!this.root) return undefined;
    this.root.inOrder(callback);
    return undefined;
  }

  inOrderString() {
    const values = [];

    this.inOrder((nodeValue) => {
      values.push(nodeValue);
    });

    return values.join(', ');
  }
}

export default BinaryTree;
