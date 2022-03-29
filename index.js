import AVLTree from "./AVL_Tree.js";
import BinarySearchTree from "./BinarySearchTree.js";
import TreeNode from "./Treenode.js";


function leftRotation(node){
    let parentNode = node.parent;
    let rightChild = node.right;
    rightChild.parent = parentNode;
    rightChild.left = node;
    node.right = null;

    if (parentNode === null)
        return rightChild;
    if(node.isOldChildInRightSide === true){
        parentNode.right = rightChild;
    }
    else if (node.isOldChildInRightSide === false){
        parentNode.left = rightChild;
    }
    return rightChild;
}

/*
const n1 = new TreeNode(1);
const n2 =  new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);

n1.right = n2;
n2.right = n3;
n3.right = n4;

const newParent = leftRotation(n1);
console.log(newParent.value);

*/



const binarySearchTree = new BinarySearchTree();
const avlTree = new AVLTree();
avlTree.add(1);
avlTree.add(2);
avlTree.add(3);
avlTree.add(4);

console.log(avlTree.root);
avlTree.inOrderTraversal();
//console.log(binarySearchTree);
//console.log(binarySearchTree.find(3));

