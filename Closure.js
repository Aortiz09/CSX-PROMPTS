/* CHALLENGE: CREATEFUNCTION - Create a function createFunction that creates and returns
 a function. When that newly created function is called, it should return the string 
 'hello world'.*/

 function createFunction() {
    return function() {
      return 'hello world';
    }
  }
  
  //Uncomment these to check your work!
  const myFunction = createFunction();
  console.log(myFunction()); //should log: 'hello world'

  /* This prompt requested to created a function which creates a new function and logs the 
  string 'hello world. We declared our function creatFunction, and returned an inner function
  that will then return the string requested. We then assigned our function createFunction to
  the myFunction variable, which when invoked will return the provided string. */

  /* CHALLENGE: createFunctionWithInput - Create a function createFunctionWithInput that accepts
 one input and returns a function. When that created function is called, it should return the
 input that was passed to createFunctionWithInput when it was created.*/

 function createFunctionWithInput(arg) {
    return function() {
      return arg;
    }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const sampleFunc = createFunctionWithInput('sample');
  console.log(sampleFunc()); // should log: 'sample'
  const helloFunc = createFunctionWithInput('hello');
  console.log(helloFunc()); // should log: 'hello'

  /* Here we are asked to create a function createFunctionWithInput that accepts one arg. This function 
  returns an inner function that when invoked returns the passed in arg. We then save our function into
  a variable sampleFunc, with an arg passed in. When the new varible is invoked the console will log the 
  passed in arg */

  /* CHALLENGE: SCOPING - Examine the code for the outer function. Notice that we are returning a function
   and that function is using variables that are outside of its scope. Uncomment those lines of code. Try
   to deduce the output before executing.*/

   function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();

  /* In this prompt we are instructed to uncomment line by line the invocation for our newly declared variables
  to see what the console would log and what and most importantly to test that the inner function has access to 
  the variable counter although it is outside its scope. The counter varible is assigned the value of 0 and
  the inner function when invoked has a counter incrementer, so each time the function is invoked
  counter will be incremeneted by 1; The first three invocatoins of willCounter() increments counter by 1, then 2,
  then 3. When but on the next invocation of jasCounter, the function starts back at 1. When willsCounter
  is invoked again it continues from where it left off, anc logs 4 to the console. This shows that inner functions have
  access to varibles declared in the outer function. */
  
  /*CHALLENGE : ADDBYX - Now we are going to create a function addByX that returns a function that will add an input by x. */

  //function addbyX excepts 1 input
 // returns a function that accepts 1 input(x)
 // inner function retuns the input and adds it to x

 function addByX(input) {
  
    return function(x) {
      return input + x;
    }
  }
  
  const addByTwo = addByX(2);
  
  // Now call addByTwo with an input of 1 and log the output
  console.log(addByTwo(1));
  // Now call addByTwo with an input of 2 and log the output
  console.log(addByTwo(2));

  /* In this prompt we are asked to delcare a function addByX which takes 1 input and returns an inner functin which
  also take 1 input (x). Our inner function is going to return the evaluated result of adding x to our input. We then 
  save our addByX function to the variable addByTwo, with a number 2 arg passed in. We envoke our function addByTwo 
  and pass in the args 1, and 2 on 2 seperate invocations into our inner function, to the get the results desired.*/

  /* CHALLENGE: ONCE - Write a function once that accepts a callback as input and returns a function. When the returned
  function is called the first time, it should call the callback and return that output. If it is called any additional 
  times, instead of calling the callback again it will simply return the output value from the first time it was called.*/

  // function accepts a cb as an input
function once(cb) {
    // declare a varible -called- and set to false, then reassign once function has been invoked once
     let called = false;
   // declare a result varible where well save our first result
     let result;
     
     // return function, that accepts an input
     return function(input) {
       //set a condition to check if our varible called is false, if so invoke cb on input, and return result, otherwise return result
       if (!called){
         result = cb(input);
         called = true;
         return result;
       }else {
         return result;
       }
     }
   }
   
   
   const addByTwoOnce = once(function(num) {
     return num + 2;
   });
   
   // UNCOMMENT THESE TO TEST YOUR WORK!
   console.log(addByTwoOnce(5));  //should log 7
   console.log(addByTwoOnce(10));  //should log 7
   console.log(addByTwoOnce(9001));  //should log 7

   /* In this challenge we declare our function once which accpets a cb as an input. Within this function we declare two variables 
   called & result. We set our called varible to false, to keep track whether or not the function has already been invoked or not, 
   and we set our result varible to null, to store the evaluated result of the invocation of our callback on the input. Within our 
   inner function we set our condtion stating that if our called varible is not true, we want to perform the callback on our input, 
   store the result of the invocation in our result variable, reassign the value of our called variable to true, and return result.
   At the first invocatin our condition will be met so all the following code will follow. On our second invocation
   our called variable is now set to true and our condition no longer meets, so our else statement kicks in and returns the previous
   result, which was saved to our result variable.*/

   /*CHALLEGNE: AFTER - Write a function after that takes the number of times the callback needs to be called before being executed
    as the first parameter and the callback as the second parameter.  */

    
 // function accepts two inputs: 1.times called before invocation 2.cb
 function after(called, cb) {
    // declare varible timesCalled: 0
    let timesCalled = 0;
    
    return function(arg) {
      timesCalled++;//increment our timesCalled varible after every invocation
      //set a condition, to not perform callback on passed in arg, until timesCalled is equal to the called paramater
      if (timesCalled >= called) {
        return cb(arg);
      } 
    }
  }
  
  
  
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed

  /* Here we are set up our function after that accepts 2 inputs, a number of times that the function needs to be exvoked before
  running the callback on the arg, and a cb function. Our inner function accepts 1 arg. We declared a variable timesCalled and set 
  it to 0 so that we can increment each time the function is invoked. In our inner function we set a condition that check if our 
  variable timesCalled is equal to our called paramater, if the condistion is true we want to return the invocation 
  of our cb on our arg. Otherwise the function will return undefined.*/

