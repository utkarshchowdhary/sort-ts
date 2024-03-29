import { Sorter } from "../Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    let length = 0;
    let curr = this.head;
    while (curr != null) {
      length++;
      curr = curr.next;
    }

    return length;
  }

  add(data: number): void {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }

    tail.next = newNode;
  }

  at(index: number): Node {
    let counter = 0;
    let curr = this.head;
    while (curr != null && counter != index) {
      curr = curr.next;
      counter++;
    }

    if (curr == null) {
      throw new Error("Index out of bounds");
    }

    return curr;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let lCounter = 0;
    let currLeftNode = this.head;
    let prevLeftNode: Node | null = null;

    while (currLeftNode != null && lCounter != leftIndex) {
      prevLeftNode = currLeftNode;
      currLeftNode = currLeftNode.next;
      lCounter++;
    }

    let rCounter = 0;
    let currRightNode = this.head;
    let prevRightNode: Node | null = null;

    while (currRightNode != null && rCounter != rightIndex) {
      prevRightNode = currRightNode;
      currRightNode = currRightNode.next;
      rCounter++;
    }

    if (currLeftNode == null || currRightNode == null) {
      throw new Error("Index out of bounds");
    }

    if (prevLeftNode != null) {
      prevLeftNode.next = currRightNode;
    } else {
      this.head = currRightNode;
    }

    if (prevRightNode != null) {
      prevRightNode.next = currLeftNode;
    } else {
      this.head = currLeftNode;
    }

    const leftHandNext = currLeftNode.next;
    currLeftNode.next = currRightNode.next;
    currRightNode.next = leftHandNext;
  }

  print(): void {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
