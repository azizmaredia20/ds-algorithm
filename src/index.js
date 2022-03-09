// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import {
  // binarySearchRecursive,
  MaxHeap,
  heapify,
  mergeSort,
} from "./algorithm";

import {
  Stack,
  Queue,
  Graph
} from './ds';

import { problem1, problem2 } from "./problems";

console.log(problem1([
  [ 'INSERT', 'GT23513413' ],
  [ 'INSERT', 'TQC2451340' ],
  [ 'SHIP', '-' ],
  [ 'INSERT', 'VYP8561991' ],
  [ 'SHIP', '-' ]
]));
console.log(problem2('checking'));


/**
 * BinarySearch
 * 
 * const sourceArr = [3, 4, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 52, 55, 62];
const res = binarySearchRecursive(sourceArr, 62);
console.log(res, res === 14)
 */


// /**
//  * MaxHeap
//  */
// const input = [10, 20, 15, 30, 40];
// const heap = new MaxHeap(input);
// heap.addElementToHeap(5);
// heap.addElementToHeap(25);
// console.log('Input - ', input);
// console.log(heapify(heap.getHeap));


// /**
//  * Stack
//  */
// const stack  = new Stack();
// stack.push(10);
// stack.push(5);
// stack.push(8);
// console.log(stack.size);
// console.log(stack.printStack());

// /**
//  * Queue
//  */
//  const queue  = new Queue();
//  queue.enqueue(10);
//  queue.enqueue(5);
//  queue.enqueue(8);
//  console.log(queue.size);
//  console.log(queue.printQueue())

/**
 * Graph
 */
// const g = new Graph(6);
// const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
// vertices.forEach(
//   (vertex) => {
//     g.addVertex(vertex);
//   }
// );
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// console.log(g.dfs('A'));
// console.log(g.printGraph());


// const unsorted = [10, 2, 1, 5, 4, 6, 3];
// console.log(mergeSort(unsorted));
