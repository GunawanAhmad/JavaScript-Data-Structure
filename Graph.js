// A graph is group of vertex/node that have a relation or connection in the node to antoher node

//  We can make a graph in a lot of different way, such as using matrix. bu its easier to implement the graph by using javascript map and object

// there two different type of Graph. Directed graph and Undirected Graph. I create Undirected Graph for this code

// function
// addVertex : to insert a vertex / node into the graph
// addEdge : to connect two node / vertex
// removeNode : to remove or delete particular node

class Graph {
  constructor() {
    //adjList stand for  adjacency list
    // a map in javascript will have Key and value. we can use the key to store the the Vertex or node and the value as the adjacency of the node
    this.adjList = new Map();
  }

  // to insert a node into a graph we simpy call set function the this.adjList set the key to node and sice it just create so it has no adjacency so the adjacency / neighbour is null or empty array
  addVertex(node) {
    this.adjList.set(node, []);
  }

  // addEdge mean we connect two node. we use get function to get a key from the Map by the source and then push the destination to the adjacency value. do the same from the destination to the source because we use undirected graph
  addEdge(source, destination) {
    this.adjList.get(source).push(destination);
    this.adjList.get(destination).push(source);
  }

  // to remove a node froom a graph we need information of all the other node that connect or have relation to the node we want to delete so we can delete the adjacency as well
  removeNode(node) {
    // get adjacency / neighbour from the node we want to delete
    let neighbourList = this.adjList.get(node);

    // loop through every node that have connection
    for (let neighbour of neighbourList) {
      // get the adjacency of the current node
      let adjacencyListOfNeighbour = this.adjList.get(neighbour);
      //get index of the node we want to delete in the adjacencyList of current node
      this.getIndexAndRemoveItem(node, adjacencyListOfNeighbour);
    }
    this.adjList.delete(node);
  }

  getIndexAndRemoveItem(item, list) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  printGraph() {
    let nodes = this.adjList.keys();

    for (let node of nodes) {
      let neighbourList = this.adjList.get(node);

      let conc = "";

      for (let neighbour of neighbourList) {
        conc += neighbour + "";
      }
      console.log(node + " -> " + conc);
    }
  }
}

// Using the above implemented graph class
var g = new Graph();
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex / node and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
