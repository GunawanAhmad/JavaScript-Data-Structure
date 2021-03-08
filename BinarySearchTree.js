//binary tree is a group of node which every node can only have maximum 2 children

//in other languanges like C++, binary tree is commonly using pointer to pointing to the child but in Javascript we use object

//we need to create Node object as i said before, BSt is just a group of Node, and each node contains a data, left child and right child
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// and then we create the BST itself, this BST object is for structuring the Node and for manipulkate each node inside the BST
//there are a lot of function we can perform inside a binary tree but in this file I just make 5 of them.

// function :
// add : to add/insert a Node inside a Binary Search Tree
// findMin : to find the minimum value inside the BST
// findMax : to dind the maximum value inside the BST
// findData : to find a particular data inside the BST
// remove : to remove a partcular data / node inside the BST
class BST {
  constructor() {
    this.root = null; // just like a tree, we need the root of out tree or the first element of the tree
  }

  // The structure of a BST is not random, the left child mean its have smaller value than the parent, the right child mean its have the bigger value the parent.
  add(data) {
    if (this.root === null) {
      //if the root is empty its mean the tree is empty and we need to fill the root fisrt
      this.root = new Node(data);
    } else {
      // the searchTree function is to check, is the data we want to insert is bigger or smaller
      //we pass the root Node the this function because we start from the root
      const searchTree = function (node) {
        //in this section we check if the left/right child is empty or not. if its not empty then we do recursive to find the empty node for the right order
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      searchTree(this.root);
    }
  }

  //this function is for finding the minimum value existed in the tree, the minimum value of the tree is the far left of the tree
  findMin(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  //this function is for finding the maximum value existed in the tree, the maximum value of the tree is the far right of the tree
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }

  // this function is for finding a specific data inside the tree
  // to find the data we just need to compare each node node data with the data
  findData(data) {
    let current = this.root;
    if (this.root === null) {
      return null;
    }
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // this function is to remove a node inside the tree with the data as parameter
  //when doing a deletion methid we need to check if the node we want to delete has a child or not and if it has a child then we need to check is it has 1 child or 2 child

  //if it has 1 one than we can ddlete it straightaway
  //if it has 1 child then we need to replace the node position with its child
  //if it has 2 child then we need to find a child the fit the tree structure, for doing this we can select the minimum child in the right subtree(a tree inside node we want to delete) of the node or wen select from the maximum from the left subtree

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
        //cause we dont use pointer, we need to store recursive action inside the node. it will do the recursive until it find child that has 1 child or 0 child and replace it
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data === node.data) {
        if (node.right == null && node.left == null) {
          //mean node with 0 child
          // when we return null, the reference to this node will be null
          return null;
        } else if (node.left === null) {
          // mean node with 1 child
          return node.right;
        } else if (node.right === null) {
          // mean node with 1 child
          return node.left;
        } else {
          //mean node with 2 child
          let temp = this.findMin(node.right); //find the minimum value in the right child
          node.data = temp.data;
          node.right = removeNode(node.right, temp.data);
          return node;
        }
      }
    };
    this.root = removeNode(this.root, data);
  }
}

let tree = new BST();
tree.add(50);
tree.add(40);
tree.add(46);
tree.add(46);

tree.add(44);

tree.add(26);

tree.add(22);
tree.add(48);
tree.add(51);
tree.add(82);
tree.add(16);
tree.add(12);
tree.add(6);
tree.add(2);
tree.add(52);

tree.remove(50);
tree.remove(2);

console.log(tree.root);
