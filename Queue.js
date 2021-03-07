//Queue data strcuture is a way to hold a data, similiar to stack while a stack is first in last last out, queue is first in first out.
//the example of queue is when you waiting in line in a store. the first person in line will be the first person to get to the cash register

//function in queue
// print : print all element in the queue
// enqueue : insert element into the queue
// dequeue : remove element from the queue
// front : return the first element of the queue
// size : return the total element of thr queue
// isEmpty : to check if the queue is empty or not

// you can implement queue using array but using array is easy to manipulate and it become not effective. the other way is by using an javascript object

function Queue() {
  let collection = []; //this is where we hold our element
  this.print = function () {
    //to show all the element are in the collection
    console.log(collection);
  };
  this.enqueue = function (value) {
    //to insert element into the queue
    collection.push(value);
  };
  this.dequeue = function () {
    //to remove the first element from the queue by using shift method
    collection.shift();
  };

  this.front = function () {
    return collection[0]; //return the first element of the queue
  };
  this.size = function () {
    return collection.length; //return the total element are in the queueu
  };
  this.isEmpty = function () {
    return collection.length === 0; // check if the queue is empty or not
  };
}

let myQ = new Queue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.print();
myQ.dequeue();
myQ.dequeue();
console.log(myQ.isEmpty());
