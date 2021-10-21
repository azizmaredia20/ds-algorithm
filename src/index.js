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

import { binarySearchRecursive } from "./algorithm";

const sourceArr = [3, 4, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 52, 55, 62];

const res = binarySearchRecursive(sourceArr, 62);
console.log(res, res === 14)