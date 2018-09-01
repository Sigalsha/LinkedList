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
        var nodeStart;
        this.head = nodeStart.previous;
        node.next = nodeStart.previous;
        this.head = node.previous;
        this._length++ ;
    }

    addItemToTheEnd(node){
        
    }

    deleteItem(node) {

    }

    deleteItemByIndex(index) {

    }
}

var list = new LinkedList();
var newNode = new Node(data)