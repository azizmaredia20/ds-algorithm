export class Stack {
  constructor() {
    this.items = [];
  }

  push = (ele) => {
    this.items.push(ele);
  }

  pop = () => {
    if (this.items.size === 0)
      return 'Empty';
    return this.items.pop();
  }

  peek = () => {
    return this.items[0];
  }

  isEmpty = () => {
    return this.size === 0;
  }

  get size() {
    return this.items.length;
  }

  printStack = () => {
    let str = '';

    this.items.forEach(
      (item) => {
        str = str ? `${item}, ${str}` : `${item}`;
      }
    );

    return str;
  }
}