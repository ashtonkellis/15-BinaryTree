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
