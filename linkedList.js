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

    addToTheBeginning() {
        newNode.next = this.head;
        this.head = newNode;
        this._length++ ;
    }

    addToTheEnd() {
        //to do: fix this//
        if (someNode.next === null) {
            newEndNode.next = someNode;
            someNode = newEndNode;
        }
    }

    delete() {
        //to do: check this//
        if (this.head === null){
            someNode.next = this.head;
            this.head = someNode;
            this._length--;
            return someNode;
        }

        var currentNode = this.head;
        var skippedNode;
        while (!currentNode.next === null) {
            if (currentNode.next === skippedNode){
                currentNode.next = skippedNode.next;
                this._length--;
            }
            currentNode = currentNode.next;
        }
    }

    removeItemByIndex() {
        //to do: check this//
       this._length = number;
       var nodeToDelete;

       if (number === 0) {
            this.head = nodeToDelete;
            return;
       }

       var countNodes = 0;
       var currentNode = this.head;
       while (!currentNode.next === null) {
            if (countNodes === number) {
                currentNode = nodeToDelete;
                currentNode.next = nodeToDelete.next;
                number-- ;
            }
            currentNode = currentNode.next;
            countNodes++ ;
       }
    }
}

// The function should be given number 
// that represents the index of the item to delete, 
// find it and then delete it.

class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
}

var list = new LinkedList();
var newNode = new Node(data);