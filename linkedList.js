class LinkedList {
    constructor(){
        this._length = 0;
        this.head = null;
    }

    print() {
        var currentNode = this.head;
        while (!currentNode.next === 0) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    addToTheBeginning(newNode) {
        newNode.next = this.head;
        this.head = newNode;
        this._length++ ;
    }

    addToTheEnd(newEndNode) {
        //to do: fix this//
        if (this.head === null) {
            newEndNode.next = null;
            this.head = newEndNode;
            this._length++ ;
        }

        var currentNode = this.head;
        while (!currentNode.next === null) {
            currentNode = currentNode.next;
        }
        newEndNode.next = null;
        currentNode.next = newEndNode;
        this._length++ ;
    }

    delete(skippedNode) {
        if (this.head === null){
            return;
        }

        var currentNode = this.head;
        while (!currentNode.next === null) {
            if (currentNode.next === skippedNode){
                currentNode.next = skippedNode.next;
                this._length--;
            }
            currentNode = currentNode.next;
        }
    }

    removeItemByIndex(index) {
       var nodeToDelete = null;

       if (index === 0) {
           nodeToDelete = this.head;
            this.head = nodeToDelete.next;
            return;
       }

       var countNodes = 0;
       var currentNode = this.head;
       while (currentNode.next !== null) {
            if (countNodes === index - 1) {
                nodeToDelete = currentNode.next;
                currentNode.next = nodeToDelete.next;
                this._length-- ;
            }
            currentNode = currentNode.next;
            countNodes++ ;
       }
    }
}

class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
}

var list = new LinkedList();
var newNode = new Node(data);