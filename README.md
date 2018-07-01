# Binary Tree Traversal
## Travis Badge
[![Build Status](https://travis-ci.org/ashtonkellis/15-BinaryTree.svg?branch=master)](https://travis-ci.org/ashtonkellis/15-BinaryTree)

## Challenge
* Implement an **in-order** traversal function that returns a string of the visited node's values.
      * For example : `6,8,7,9,2,1,4,3,5`

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
