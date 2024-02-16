const { NotImplementedError, ListNode } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this._head = null;
  }
  push(value) {
    const newNode = new ListNode(value);
    newNode.next = this._head;
    this._head = newNode;
  }

  pop() {
    if (!this._head) {
      return undefined;
    }

    const value = this._head.value;
    this._head = this._head.next;
    return value;
  }

  peek() {
    if (!this._head) {
      return undefined;
    }

    return this._head.value;
  }
}

module.exports = {
  Stack
};
