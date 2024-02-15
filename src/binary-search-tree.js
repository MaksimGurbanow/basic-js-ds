const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    this._root = findPosition(this._root, data);

    function findPosition(node, addNode) {
      if (!node) {
        return new Node(addNode)
      }

      if (node.data === addNode) {
        return node;
      }

      if (node.data < addNode) {
        node.right = findPosition(node.right, addNode)
      } else {
        node.left = findPosition(node.left, addNode)
      }
      return node;
    }
  }

  has(data) {
    function innerHas(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data < data) {
        return innerHas(node.right, data)
      }
      else {
        return innerHas(node.left, data)
      }

    }
    return innerHas(this._root, data);
  }

  find(data) {
    function innerSearch(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        return innerSearch(node.right, data);
      } else {
        return innerSearch(node.left, data);
      }
    }

    return innerSearch(this._root, data);
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null
    }
    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) {
      return null
    }
    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};