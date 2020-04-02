class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let nextNode = currentNode;

    while (currentNode.next) {
      nextNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = nextNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null
    }

    return currentHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) return null;
    let currCount = 0;
    let currentNode = this.head;


    while (currCount !== idx) {
      currentNode = currentNode.next;
      currCount++;
    }

    return currentNode;
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx > this.length || idx < 0) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let node = new Node(val);
    let prev = this.get(idx - 1);
    let tmp = prev.next;
    prev.next = node;
    node.next = tmp;
    this.length++;
    return true;
  }

  remove(idx){
    if(idx < 0 || idx > this.length) return undefined;
    if(idx === this.length -1) return this.pop();
    if(idx === 0) return this.shift();

    let prevNode = this.get(idx-1);
    let removed = prevNode.next;
    prevNode = removed.next;
    return removed;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

/**
 * BIG O
 *
 * Insert O(1)
 * Removal O(1) or O(N)
 *   - Beginning O(1)
 *   - end O(N) b/c you have to find the one before end
 * Searching O(N)
 * Access O(N)
 */

