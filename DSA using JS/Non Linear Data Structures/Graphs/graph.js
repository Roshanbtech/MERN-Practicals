class Graph {
  constructor() {
    this.adjencyList = {}; // Adjacency list to store graph vertices and edges
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = new Set(); // Using Set for neighbors to avoid duplicates
    }
  }

  // Method to add an undirected edge between two vertices
  addEdges(v1, v2) {
    if (!this.adjencyList[v1]) this.addVertex(v1);
    if (!this.adjencyList[v2]) this.addVertex(v2);

    this.adjencyList[v1].add(v2);
    this.adjencyList[v2].add(v1); // Since it's an undirected graph
  }

  // Method to remove an edge between two vertices
  removeEdge(v1, v2) {
    this.adjencyList[v1]?.delete(v2);
    this.adjencyList[v2]?.delete(v1);
  }

  // Method to remove a vertex and all its edges
  removeVertex(vertex) {
    if (!this.adjencyList[vertex]) return;

    for (let neighbor of this.adjencyList[vertex]) {
      this.removeEdge(vertex, neighbor); // Remove edges associated with this vertex
    }
    delete this.adjencyList[vertex]; // Delete the vertex itself
  }

  // BFS Traversal method (Breadth-First Search)
  BFS(start) {
    let queue = [start];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
      let vertex = queue.shift(); // Dequeue a vertex
      console.log(vertex);

      // Add unvisited neighbors to the queue
      for (let neighbor of this.adjencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // DFS Traversal method (Depth-First Search)
  DFS(start) {
    let stack = [start];
    let visited = new Set();
    visited.add(start);

    while (stack.length) {
      let vertex = stack.pop(); // Pop a vertex from the stack
      console.log(vertex);

      // Add unvisited neighbors to the stack
      for (let neighbor of this.adjencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }

  // Display the graph (adjacency list)
  display() {
    for (let vertex in this.adjencyList) {
      console.log(vertex + " -> " + [...this.adjencyList[vertex]]);
    }
  }

  // Method to count leaf nodes (nodes with only one neighbor)
  countLeaves() {
    let count = 0;
    for (let vertex in this.adjencyList) {
      if (this.adjencyList[vertex].size === 1) {
        count++;
      }
    }
    return count;
  }

  countCycles() {
    let visited = new Set();
    let cycleCount = 0;
    const dfs = (vertex, parent) => {
      visited.add(vertex);
      for (let neighbor of this.adjencyList[vertex]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, vertex);
        } else if (neighbor !== parent) {
          cycleCount++;
        }
      }
    };
    for (let vertex in this.adjencyList) {
      if (!visited.has(vertex)) {
        dfs(vertex, null);
      }
    }
    //each cycle is counted twice so divide by 2
    return cycleCount / 2;
  }

  countCyclesBFS() {
    const visited = new Set();
    let cycleCount = 0;

    const bfs = (start) => {
      const queue = [[start, null]]; // Queue stores [node, parent]

      while (queue.length > 0) {
        const [node, parent] = queue.shift();
        visited.add(node);

        for (let neighbor of this.adjacencyList[node]) {
          if (!visited.has(neighbor)) {
            // Add unvisited neighbor to the queue
            queue.push([neighbor, node]);
          } else if (neighbor !== parent) {
            // If visited and not the parent, it's a back edge
            cycleCount++;
          }
        }
      }
    };

    // Call BFS for each component
    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        bfs(vertex);
      }
    }

    // Each cycle is counted twice, so divide by 2
    return cycleCount / 2;
  }
}

// Example usage:
const graph = new Graph();
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "A");
graph.addEdges("C", "D");

graph.display(); // Display the graph structure
graph.BFS("A"); // Perform BFS starting from vertex "A"
graph.DFS("A"); // Perform DFS starting from vertex "A"

console.log("Leaf Nodes Count:", graph.countLeaves()); // Count the number of leaf nodes
console.log("Cycle Count:", graph.countCycles()); // Count the number of cycles in the graph
