const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this._head = null;
  }

  getUnderlyingList() {
    return this._head
  }

  enqueue(value) {
    this._head = innerSearch(this._head, value);

    function innerSearch(node, value) {
      if (!node) {
        return new ListNode(value);
      }

      node.next = innerSearch(node.next, value);

      return node;
    }
  }

  dequeue() {
    const retValue = this._head.value;
    this._head = this._head.next;
    return retValue;
  }
}

module.exports = {
  Queue
};
