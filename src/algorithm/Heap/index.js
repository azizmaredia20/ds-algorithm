/**
 * Heap Topics
 * 1. Array Representation of Binary Tree
 * 2. Complete Binary tree
 * 3. Heap
 * 4. Insert and Delate an element
 * 5. Heap Sort
 * 6. Heapify
 * 7. Priority Queue
 */

/**
 * 1. Array Representation of Binary Tree
 *            A
 *           /  \
 *          /    \
 *         B      C   
 *       /  \    /  \
 *      /    \  /    \
 *     D      E F     G
 * 
 * [A, B, C, D, E, F, G]
 * - The above tree is a full Binary tree and also Complete binary tree
 * - Max number of element in a full binary tree = 2^(h+1) - 1
 * 
 * 
 *            A
 *           /  \
 *          /    \
 *         B      C   
 *       /  \ 
 *      /    \  
 *     D      E 
 * 
 * [A, B, C, D, E]
 * The above is a complete binary tree but not a full binary tree
 * 
 *            A
 *           /  \
 *          /    \
 *         B      C   
 *               /  \
 *              /    \
 *              F     G
 * 
 * [A, B, C, -, -, F, G]
 * The above tree is neither full nor complete binary tree
 *
 * Note - A complete binary tree is a a tree which does not have blanks when represented as array
 * The height of a complete binary tree is always log(n)
 * 
 * if a node is at index i
 * its left child is at -  2i + 1
 * its right child is at - 2i + 2
 * its parent is at - |(i-1)/2| OR Math.floor((i-1)/2)
 * 
 * 
 * Heap
 * A heap is a complete binary tree
 * Max Heap - A complete Binay tree where parent is always greater or equal to its descendant
 *            50
 *           /  \
 *          /    \
 *         30     20   
 *       /  \    /  \
 *      /    \  /    \
 *     15    10 8     16
 * Min Heap - A complete Binay tree where parent is always less or equal to its descendant
 *            10
 *           /   \
 *          /     \
 *        30        20   
 *       /  \      /  \
 *      /    \    /    \
 *    35     40  32     25
 * 
 * 
 */        

/**
 * Steps to insert element in a max heap
 * 1. Insert the elemenent as the last element in the array or as last element in complete binary tree
 * 2. Adjust the elements from leaf to root direaction to maintain the properties of max heap
 */


/**
 * Steps to delete element in a max heap
 * 1. Remove the parent or the top element in the tree
 * 2. Adjust the elements by pushing down from root to leaf direaction to maintain the properties of max heap
 */

/**
 * Heap Sort
 * 1. Create a heap from given elements
 * 2. Delete the elements one by one from the heap
 * 
 * Note - To implement we delete the largest element from the top
 * Balance the max heap and
 * insert the deleted element in the vacant space in the end
 * Repeate the above steps for all the elements sort the array and finally returns a sorted heap
 */

/**
 * Create a data structure max heap
 * Max heap - insert and delete
 * 
 */
export class MaxHeap {
    #heap=[]; // # defines private field in the class
    constructor(input) {
        if (Array.isArray(input)) {
            input.forEach(ele => this.addElementToHeap(ele))
        } else {
            this.addElementToHeap(input);
        }
    }

    get getHeap() {
        return this.#heap;
    }

    addElementToHeap = (ele) => {
        if (this.#heap.length === 0) {
            this.#heap[0] = ele
        } else {
            this.getHeap[this.getHeap.length] = ele;
            this.adjustFromLeafToRoot();
        }
    }

    adjustFromLeafToRoot = () => {
        let elePos = this.getHeap.length - 1;
        let parentInd = Math.floor((elePos - 1)/2);
        while(parentInd >= 0 && this.getHeap[parentInd] < this.getHeap[elePos]) {  
            const swap = this.getHeap[parentInd];
            this.getHeap[parentInd] = this.getHeap[elePos];
            this.getHeap[elePos] = swap;

            elePos = parentInd;
            parentInd = Math.floor((parentInd - 1)/2);
        }
    }

}

/**
 * Heapify an array / create priority queue from an array
 */

const swapEle = (arr, ind1, ind2) => {
    const swap = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = swap;
}

const adjustFrmRootToLeaf = (inputArr, lastHeapInd, ind) => {
    const leftChildInd = 2*ind + 1 <= lastHeapInd ? 2*ind + 1 : -1;
    const rightChildInd = 2*ind + 2 <= lastHeapInd ? 2*ind + 2 : -1;
    let compareInd;

    if (leftChildInd > 0 && rightChildInd < 0) {
        compareInd = leftChildInd;
    } else if (rightChildInd > 0 && leftChildInd <0) {
        compareInd = rightChildInd;
    } else if (inputArr[leftChildInd] > inputArr[rightChildInd]) {
        compareInd = leftChildInd;
    } else {
        compareInd = rightChildInd;
    }

    if (compareInd >=0 && compareInd <= lastHeapInd && inputArr[ind] < inputArr[compareInd]) {
        swapEle(inputArr, ind, compareInd);
        adjustFrmRootToLeaf(inputArr, lastHeapInd, compareInd);
    }
}

export const heapify = (inputArr) => {
    let lastHeapInd = inputArr.length - 1;

    while (lastHeapInd >= 1) {
        swapEle(inputArr, lastHeapInd, 0)
        lastHeapInd--;

        // Now rearrange all elements to regain the heap property
        adjustFrmRootToLeaf(inputArr, lastHeapInd, 0);
    }

    return inputArr;
}