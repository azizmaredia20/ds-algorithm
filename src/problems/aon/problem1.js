// export const problem1 = (inputs) => {
//   console.log('Problem1', inputs);
// }




/*
 * Complete the 'performWarehouseQueries' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts 2D_STRING_ARRAY query as parameter.
 */
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue = (ele) => {
        this.items.push(ele);
    }
    
    dequeue = () => {
        if (this.isEmpty()) {
            return 'Empty';
        }
        return this.items.shift();
    }
    
        size = () => {
        return this.items.length;
    }
    
    isEmpty = () => {
        return this.size() === 0;
    }

    get allItems () {
      return this.items;
    }
}

export const problem1 = (query) => {
    // Write your code here
    console.log('query', query);
    let result = [];
    const masterQueue = new Queue();
    let orderQueue = new Queue();
    
    query.forEach(
        ([queryType, code]) => {
           if (queryType === 'INSERT') {
              orderQueue.enqueue(code);
               if (orderQueue.size() >= 3) {
                  masterQueue.enqueue(orderQueue);
                  orderQueue = new Queue(); 
               }
           }
           
           if (queryType === 'SHIP') {
               if (masterQueue.isEmpty()) {
                   result.push(['NA']);
               } else {
                   result.push(masterQueue.dequeue().allItems);
               }
           }
        }
    );
    
    return result;
}


