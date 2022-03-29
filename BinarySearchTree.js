
import TreeNode from "./Treenode.js";

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    isOldChildInRightSide(node){
        const parentNode = node.parent;
        if (parentNode === null)
            return null;
        else{
            return node.value === parentNode.right.value ? true: false;
        }
    }

    add(value) {
        const newNode = new TreeNode(value);
        const { found, parent } = this.doesNodeAlreadyExists(value);
        if (found !== null) {
            console.log('The node with the given value already exists!! ');
            return false;
        }
        else if (this.root == null) {
            this.root = newNode;
            return newNode;
        }
        else {
            if (value < parent.value)
                parent.left = newNode;
            else
                parent.right = newNode;

            return newNode;

        }




    }
    find(value) {
        const { found, parent } = this.doesNodeAlreadyExists(value);
        if (found)
            return found;
        return null;
    }
    remove(value) {
        const nodeToRemove = this.find(value);
        if (!nodeToRemove)
            return false;

        this.combineLeftIntoRightSubtree(nodeToRemove);
        return nodeToRemove;
    }
    getMax() {

    }
    getMin() {

    }

    doesNodeAlreadyExists(value) {
        let node = this.root;
        let parent = null;

        while (node != null) {
            if (node.value === value) {
                break;
            }
            parent = node;
            node = (value >= node.value) ? node.right : node.left;
        }
        return {
            found: node, parent: parent
        }

    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.leftChild);
            console.log(node.value);
            this.inOrderTraversal(node.rightChild);
        }
    }

    combineLeftIntoRightSubtree(nodeToDelete) {
        let leftChild = nodeToDelete.leftChild;
        let rightChild = nodeToDelete.rightChild;
        let parentOfDeleteNode = nodeToDelete.parent;

        if (!leftChild && !rightChild) {
            const isGreater = nodeToDelete.value < parentOfDeleteNode.value ? false : true;
            if (!isGreater)
                parentOfDeleteNode.leftChild = null;
            else
                parentOfDeleteNode.rightChild = null;
        }
        else if (!leftChild) {
            if (parentOfDeleteNode !== null)
                parentOfDeleteNode.rightChild = nodeToDelete.rightChild;
            else
                this.root = nodeToDelete.rightChild;
        }
        else if (!rightChild) {
            if (parentOfDeleteNode !== null)
                parentOfDeleteNode.leftChild = nodeToDelete.leftChild;
            else
                this.root = nodeToDelete.leftChild;
        }
        else {
            if (parentOfDeleteNode !== null) {
                parentOfDeleteNode.rightChild = nodeToDelete.rightChild;
                nodeToDelete.rightChild.leftChild = nodeToDelete.leftChild;
            }
            else{
                nodeToDelete.rightChild.leftChild = nodeToDelete.leftChild;
                this.root = nodeToDelete.rightChild;
            }

        }


    }

    getLastNodeFromRightSide(node) {
        let nodeToQuery = node;
        while (nodeToQuery.rightChild !== null) {
            nodeToQuery = nodeToQuery.leftChild;
        }
        return nodeToQuery;
    }

    getLastNodeFromLeftSide(node) {
        let nodeToQuery = node;
        while (nodeToQuery.leftChild !== null) {
            nodeToQuery = nodeToQuery.leftChild;
        }
        return nodeToQuery;
    }
}

export default BinarySearchTree;