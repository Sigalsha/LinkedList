class Node{
    constructor(value) {
      this.data = value;
      this.previous = null;
      this.next = null;
    }
  }
   
  class DoublyList {
    constructor(){
      this._length = 0;
      this.head = null;
      this.tail = null;
    }

    addItemToTheBeginning(node){
        node.next = this.head;
        node.previous = null;
        
        if (this.head === null) {     
            this.tail = node;
        } else {
            node.next.previous = node;
        }

        this.head = node;
        this._length++ ;
    }

    // Note that addItemToTheEnd is the same as addItemToTheBeginning, only reversed
    // Start from the tail instead of searching the end of the list with a loop
    addItemToTheEnd(node){
        node.next = null;       
        if (this.head === null){
              this.head = node;
              node.previous = null; 
        } else {
            var currentNode;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            this.tail = currentNode;
            node.previous = currentNode;
        }
        this.tail = node;
        this._length++ ;
    }

    deleteItem(node) {
        if (this.head === null || this.tail === null) {
            return;
        }

        if (node.previous === null) {
            this.head = node.next;
        } else {
            node.previous.next = node.next;
        }

        if (node.next === null) {
            this.tail = node.previous;
        } else {
            node.next.previous = node.previous;
        }

        this._length-- ;
    }
       
    deleteItemByIndex(index) {
        var countNodes = 0;
        var node = this.head;

        if (index === this._length - 1) {
            this.deleteItem(this.tail);
        }

        while (node.next !== null) {
            if (countNodes === index) {
                this.deleteItem(node);
            }
            node = node.next;
            countNodes++ ;
        }

        this._length-- ;   
    }
}

var list = new LinkedList();
var newNode = new Node(data)