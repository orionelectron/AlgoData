import BinarySearchTree from "./BinarySearchTree.js";




class AVLTree extends BinarySearchTree{
    add(value){
        const node = super.add(value);
        if(node){
            this.root = this.balanceUpstream(node);
            return node;
        }
        console.log("Given value in AVL tree already exists!!");
        return false;
        
    }

    balanceUpstream(node){
        let current = node;
        let newParent;
        while(current){
            newParent = this.balance(current);
            current = current.parent;
        }
        return newParent;
    }

    remove(value){
        const node = super.remove(value);
        if (node){
          this.root =  this.balanceUpstream(node.parent);
            return node;
        }
        console.log("The node couldn't be deleted for some fucked up reasons!!");
        return false;
    }

    balance(node){
        if (node.balanceFactor > 1){
            if (node.left.balanceFactor < 0 ){
                return this.leftRightRotation(node);
            }
            else if (node.left.balanceFactor > 0){
                return this.rightRotation(node);
            }
        }
        else if(node.balanceFactor < -1){
            if (node.right.balanceFactor > 0){
               return this.rightLeftRotation(node);
            }
            else if (node.right.balanceFactor < 0){
                return this.leftRotation(node);
            }
        }
        return node;
    }

    leftRotation(node){
        let parentNode = node.parent;
        let rightChild = node.right;
        rightChild.parent = parentNode;
        rightChild.left = node;
        node.right = null;
        if (parentNode === null)
            return rightChild;
        if(this.isOldChildInRightSide(node) === true){
            parentNode.right = rightChild;
        }
        else if (this.isOldChildInRightSide(node) === false){
            parentNode.left = rightChild;
        }
        return rightChild;
    }
   rightRotation(node){
        let parentNode = node.parent;
        let leftChild = node.left;
        leftChild.parent = parentNode;
        leftChild.right = node;
        node.left = null;

        if(parentNode === null)
            return leftChild;

        if(this.isOldChildInRightSide(node) === true){
            parentNode.right = leftChild;
        }
        else if (this.isOldChildInRightSide(node) === false){
            parentNode.left = leftChild;
        }
    
    }

    leftRightRotation(node){
        this.leftRotation(node.left);
        return this.rightRotation(node);
    }
    rightLeftRotation(node){
        this.rightRotation(node.right);
        return this.leftRotation(node);
    }
}

export default AVLTree;
