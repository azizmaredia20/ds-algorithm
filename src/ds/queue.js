export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue = (ele) => {
    this.items.push(ele);
  }

  dequeue = () => {
    if (this.size === 0)
      return 'Empty';

    return this.items.shift();
  }

  front = () => {
    return this.items[0];
  }

  isEmpty = () => {
    return this.size === 0;
  }

  get size() {
    return this.items.length;
  }

  printQueue = () => {
    let str = '';
    this.items.forEach(
      (ele) => {
        str = str ? `${str}, ${ele}` : `${ele}`;
      }
    );

    return str;
  }
}