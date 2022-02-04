import { Queue, Stack } from "..";

export class Graph {
  constructor(totalVertex) {
    this.numOfVertex = totalVertex;
    this.adjList = new Map();
  }

  addVertex = (v) => {
    this.adjList.set(v, []);
  }

  addEdge = (v1, v2) => {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  printGraph = () => {
    const vertices = this.adjList.keys();
    let fs = '';
    for (let vertex of vertices) {
      let res = '';
      this.adjList.get(vertex).forEach(
        (item) => {
          res = res ? `${res} -> ${item}` : item;
        }
      );

      fs += `\n ${vertex}: ${res}`;
    }
    return fs;
  }

  /**
   * Steps for BFS
   * 1. Visit the starting node and enqueue for exploration
   * 2. Repeat these steps to explore all nodes while queue is not empty
   *    a. Dequeue ele from queue.
   *    b. Get all the neighours for that ele
   *    c. Visit only all unvisited neighbour element and add them to queue.
   *    
   */

  bfs = (sn) => {
    // Enqueue a node and mark it as visited
    const queue = new Queue();
    queue.enqueue(sn);
    const visited = {};
    visited[sn] = true;

    while(!queue.isEmpty()) {
      // Dequeue and explore all the neighbours
      const vertex = queue.dequeue();
      console.log(vertex);

      // Explore the neighbouring elements.
      const adjList = this.adjList.get(vertex);
      adjList.forEach(
        (adjVert) => {
          if (!visited[adjVert]) {
            visited[adjVert] = true;
            queue.enqueue(adjVert);
          }
        }
      )
    }
  }

  /**
   * Steps for DFS
   * 1. Add the starting node to stack
   * 2. Repeat the below steps to explore all nodes while the stack is not empty
   *    a. Pop the element from stack
   *    b. if the ele is not visited, then visit the ele
   *    c. add all the childrens of that ele to the stack
   * 
   */

  dfs = (sv) => {
    const visited = {};
    const stack = new Stack();
    stack.push(sv);

    while(!stack.isEmpty()) {
      const node = stack.pop();

      if (!visited[node]) {
        visited[node] = true;
        console.log(node);

        this.adjList.get(node).forEach(
          (neighbour) => {
            stack.push(neighbour);
          }
        ) 
      }
    };
  }

  dfsRecursive= (sv) => {
    const visitied = {};
    this.dfsRecursiveUtil(sv, visitied)
  }

  dfsRecursiveUtil = (vertex, visitied) => {
    visitied[vertex] = true;
    console.log(vertex);

    this.adjList.get(vertex).forEach(
      (neighbour) => {
        if (!visitied[neighbour]) {
          this.dfsRecursiveUtil(neighbour, visitied);
        }
      }
    )
  }
}