'use strict';

import BinaryTree from '../../lib/binary-tree';

let testBT;

beforeEach(() => {
  testBT = new BinaryTree();
  testBT.insert(2);
  testBT.insert(1);
  testBT.insert(3);
  testBT.insert(4);
});

afterEach(() => {
  testBT = null;
});

describe('BinaryTree methods', () => {
  test('#insert: simple case', () => {
    expect(testBT).toBeInstanceOf(BinaryTree);
    expect(testBT.root.value).toBe(2);
    expect(testBT.root.left.value).toBe(1);
    expect(testBT.root.right.value).toBe(3);
    expect(testBT.root.right.right.value).toBe(4);
  });

  test('#inOrderString: simple case', () => {
    expect(testBT.inOrderString()).toBe('1, 2, 3, 4');
  });
});
