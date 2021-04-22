class SingleLinkedList {
  constructor(...values) {
    this.head = new ListNode(this.head);
    this.length = 0;
    for(let value of values){
      this.insert(value)
    }
  }
  insert(value, i) {
    let node = new ListNode(value);
    let currentNode = this.head;
    if (!isDefined(i)) {
      if (this.length === 0) {
        this.head = node;
      } else {
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
    } else if (i < 0 || i > this.length) {
      throw Error ("AAAAAAA");
    } else if (i === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previousNode = null;
      for (let x = 0; x < i; x++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = node;
      node.next = currentNode;
    }
    this.length++;
  }
  length() {
    console.dir(this.length)
    return this.length;
  }
  at(i) {
    let currentNode = this.head;
    if (i < 0 || i > this.length || !isDefined(i)) {
      return undefined; //throw Error ("AAAAAAA");
    }
    for (let x = 0; x < i; x++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  remove(i) {
    let currentNode = this.head;
    let previousNode = null;
    if (!isDefined(i)) {
      if (this.length === 0) {
        this.head = null;
      } else {
        while (currentNode.next !== null) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = null;
      }
    } else if (i < 0 || i > this.length) {
      throw Error ("AAAAAAA");
    } else if (i === 0) {
      this.head = currentNode.next;
    } else {
      let previousNode = null;
      for (let x = 0; x < i; x++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    console.log(currentNode.value);
    return currentNode.value;
  }
  map(callback) {
    const newList = new SingleLinkedList();
    let currentNode = this.head;
    let i = 0;
    while(currentNode){
      newList.insert(callback(currentNode.value, i));
      currentNode = currentNode.next;
      i++
    }
    return newList;
  }
  filter(callback) {
    const newList = new SingleLinkedList();
    let currentNode = this.head;
    let i = 0;
    while(currentNode !== null){
      if(callback(currentNode.value, i)){
        newList.insert(currentNode.value);            //mb double-linked
      }
      currentNode = currentNode.next;
      i++;
    }
    return newList;
  }
  reduce(callback) {
    let currentNode = this.head;
    // let accumulator = 0;
    let val = 0;
    while(currentNode){
      val = callback(val, currentNode.value)  
      currentNode = currentNode.next;
    }
    return val;
  }
  sort(callback) {
    const newList = new SingleLinkedList();
    
  }
}
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = { SingleLinkedList };
const isDefined = (val) =>
  val !== undefined &&
  val !== null &&
  !(typeof value === "number" && isNaN(val));

// const list = new SingleLinkedList(5, 4, 1);
// list.remove(0)
// list.remove(1)
// console.log(list)
// // console.log(list.remove(2))