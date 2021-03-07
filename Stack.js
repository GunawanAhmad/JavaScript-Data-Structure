//Stacks is Data Structure where it only have one way out and one way in
//to put something to stack list we called it push
//to delete something out of the stack we called it pop
//example of stack is like when we put some book into a box, we put the book one by one and the first book become the last node which is the bottom of the box. when we want to take a book from the box, we can oly take the top one of book. in stack this mecanism is called LIFO meaning Last in First Out

//function
//Push : placing data iinto a stack
//pop : remove element from a stack
//peek : displaying the top element of a stack
//length/size : determine the total element in a stack

//we can use array for our stack
let stacks = []; //this is our stack

//to place some elemtent into the stack we can use push() build in js function
stacks.push(1); //it will push element 1 into the stack

//to remove element from a stack we can use pop() build in js function
//remember that pop function will return the removed element
stacks.pop();

//implement stack as an array is easy yet not good because we can manupulate the content easily

//another way to implementing a stack is using an js object
let Stack = function () {
  this.count = 0; //this variable will keep tracking how many element are in the stack
  this.storage = {}; //this will be our storage for our stack element

  //this function is to placing an element into our stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //this function is for removing an element from our stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //this function is to check how many element are in the stack
  this.size = function () {
    return this.count;
  };

  //this function is for checking the last element of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1); //insert 1 element to stack
myStack.push(2); //insert 2 element to stack

console.log(myStack.peek()); //check the last elemtn in the stack which is "2"
myStack.pop(); //remove the last element in the stack which is 2
console.log(myStack.peek()); // check the last element in the stack which is 1 beacuse we already pop the "2" element
