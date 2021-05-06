const { hash } = require("./PJWHash");

class ListItem {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }
}

class List {
  constructor() {
    this.count = 0;
    this.head = null;
    this.last = null;
  }
  add(data) {
    const item = new ListItem(data);
    const last = this.last;

    if (last) {
      last.next = item;
    } else {
      this.head = item;
    }

    this.count++;
    this.last = item;
    return item;
  }
  find(predicate) {
    let item = this.head;
    if (!item) return;

    do {
      if (predicate(item.data)) return item.data;
    } while ((item = item.next) !== null);
  }
  findAndRemove(predicate) {
    let item = this.head;
    if (!item) return;
    if (predicate(item.data)) {
      this.head = this.head.next;
      this.count--;
      return item.data;
    }
    while (true) {
      const nextItem = item.next;
      if (!nextItem) return;

      if (predicate(nextItem.data)) {
        item.next = nextItem.next;
        if (this.last === nextItem) {
          this.last = null;
        }
        this.count--;
        return nextItem.data;
      }
      item = nextItem;
    }
  }
  isEmpty() {
    return !(this.head instanceof ListItem);
  }
}

function isArray(arg) {
  return Object.prototype.toString.call(arg) == "[object Array]";
}

class HashTable {
  //Load factor < 8
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(this.size);
  }
  set(key, value) {
    const index = hash(key, this.size);
    if (this.table[index] === undefined) {
        this.table[index] = new List();

    }
    const ceil = this.table[index];
    
    const item = ceil.find((item) => item[0] === key);
    if (item) {
      item[1] = value; 
    } else {
      let element = new Array(2); 
      element[0] = key;
      element[1] = value;
      ceil.add(element);
    }
  }
  get(key) {
    const index = hash(key, this.size);
    const ceil = this.table[index];

    if (!ceil) return undefined;

    const item = ceil.find((item) => item[0] === key);
    if (!item) return undefined;
    return item[1];
  }
  remove(key) {
    const index = hash(key, this.size);
    const ceil = this.table[index];

    if (!ceil) {
      return;
    }

    const removed = ceil.findAndRemove((item) => item[0] === key);

    if (ceil.isEmpty()) {
      this.table[index] = undefined;
    }
  }
  static from(iterable) {
    const newMap = new HashTable();
    for (let i = 0; i < iterable.length; i++) {

      if (isArray(iterable[i])) {
          newMap.set(iterable[i][0], iterable[i][1])

      } else if (typeof iterable[i] === "object") {
            newMap.set(iterable[i].key, iterable[i].value)

      } else throw Error;
    }
    // console.log(newMap)
    return newMap;
  }
}

module.exports = { HashTable };
