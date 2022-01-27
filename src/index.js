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
  heapify
} from "./algorithm";

/**
 * BinarySearch
 * 
 * const sourceArr = [3, 4, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 52, 55, 62];
const res = binarySearchRecursive(sourceArr, 62);
console.log(res, res === 14)
 */


/**
 * MaxHeap
 */
const input = [10, 20, 15, 30, 40];
const heap = new MaxHeap(input);
heap.addElementToHeap(5);
heap.addElementToHeap(25);
console.log('Input - ', input);
console.log(heapify(heap.getHeap));
