
class TreeNode{
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
        
    }

    /*
    get value(){
        return this.value;
    }
    */
    

    get left(){
        return this.leftChild;
    }

    set left(node){
        
        if (node){
            this.leftChild = node;
            node.parent = this;
        }
        else{
            console.log("Empty node");
        }
    }

    get right() {
        return this.rightChild;
    }

    set right(node){
       
        if (node){
            this.rightChild = node;
            node.parent = this;
        }
        else{
            console.log("Empty node");
        }
    }

    get isLeftChildEmpty() {
        if (this.leftChild != null)
            return true;
        return false;
    }

    get isRightChildEmpty() {
        if (this.rightChild != null)
            return true;
        return false;
    }

    get areChildrenEmpty(){
        if (this.isLeftChildEmpty && this.isRightChildEmpty)
            return true;
        return false;
    }

    get height(){
        return Math.max(this.leftSubtreeHeight - this.rightSubtreeHeight);
    }

    get isOldChildInRightSide(){
        const parentNode = this.parent;
        if (parentNode === null)
            return null;
        else{
            return this.value === parentNode.right.value ? true: false;
        }
    }

    get rightSubtreeHeight(){
        return this.right ? this.right.height + 1 : 0;
    }

    get leftSubtreeHeight(){
        return this.left ? this.left.height + 1 : 0;
    }

    get balanceFactor(){
        return this.leftSubtreeHeight - this.rightSubtreeHeight; 
    }

}

export default TreeNode;