/*
Declare a function, 'UniqueQueue', which takes in an array as an argument and returns an instance of a 'UniqueQueue' object when invoked with the 'new' keyword.

'UniqueQueue' objects should function similarly to a queue, but they will 
only store UNIQUE values (no duplicates).

Each value should be stored with an index representing its order in the queue. 

All UniqueQueue objects should contain their own 'length' property, which keeps track of the number of items they contain.

When a UniqueQueue is first created, each array element should be enqueued, and the 'length' property updated accordingly.

Duplicates in the initial array should be ignored.

Example:
Creating a UniqueQueue from [1, 2, 3] --> { 0: 1, 1: 2, 2: 3, length: 3 }
Creating a UniqueQueue from [1, 1, 2] --> { 0: 1, 1: 2, length: 2 }
*/

//input: array 
//output: object instance with stored values at indexes
//add length prop initialize to 0
//loop through array and set condition to check if any elements already exist
//if element doesn't exist, store at appropriate index and increment length prop

function UniqueQueue(array) {
    this.length = 0;
    let uniqueArr = [...new Set(array)]
    
    for (let i = 0; i < uniqueArr.length; i++) {
      
            this[i] = uniqueArr[i];
        this.length++;
    }
  }
  
  /*
  Declare a function, 'enqueue', which is accessible to ALL instances of 'UniqueQueue'. 'enqueue' should take in a single argument, and when invoked on a UniqueQueue instance, should add the argument to the end of the queue if it's not already present, increment the UniqueQueue's length property appropriately, and return the length of the queue.
  */
  
  //input: arg output: none
  //add enqueue method to unique qs prototype 
  //loop through object using a for in loop to check if arg is already present
  //if not present access object @ the index of length + 1 and add arg
  //increment length property
  
  UniqueQueue.prototype.enqueue = function(arg) {
    for (let key in this) {
    
      // if (this[key] !== arg) {
      // for (let i = 0; i < this.length; i++) {
       
        // console.log('testing')
        if (this[key] === arg) { //if arg exists, exit function
            return;
        }
      }
    
            this[this.length] = arg;
        this.length++
        return this.length;
    }
  
  
  /* 
  Declare a function, 'reverse', that is accessible to ALL instances of the 'UniqueQueue' object.
  
  'reverse' does not take in any arguments, and will return a new UniqueQueue instance, in which all elements of the original NumberedList it was called upon have been reversed.
  
  For example, calling 'reverse' on the following 'UniqueQueue': 
    { 0: 'a', 1: 'b', 2: 'c', length: 3 } 
  should return a new 'UniqueQueue' with the properties:
    { 0: 'c', 1: 'b', 2: 'a', length: 3 }
  
  Note: this method should NOT modify the object it was called upon!
  */
  
  
  //input: none output: an object instance with num values reversed
  //convert our object into a array using Object.values, exclude last value using Slice method
  //use a the reverse mothod on values in array
  //iterate through our modified array
  //store values back in the object instance at the appropriate index
  
  
  UniqueQueue.prototype.reverse = function() {
    const values = Object.values(this).slice(0, -1).reverse();
    const reversedQ = new UniqueQueue(values);    
    return reversedQ;
  }
  
  const stored = new UniqueQueue([1, 2, 2, 3]);
  const stored2 = new UniqueQueue([2, 4, 4, 6]); 
  stored2.enqueue(9)
  console.log(stored.reverse());
  console.log(stored);
  // console.log(stored2)//{ 0: 9, 1: 6, 2: 4, 3: 2, length: 4 }