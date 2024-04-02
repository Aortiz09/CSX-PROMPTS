/* CHALLENGE: MAKEPERSON - Create a function that accepts two inputs (name and age) and
 returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the name argument 
passed into the function
Add an age property to the newly created object with its value being the "age" argument 
passed into the function
Return the object*/

// function makePerson(name, age) {
//  const cache = {
//    name: name,
//    age: age
//  }

// return cache;
// }
function makePerson(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    
    return person;
  }
  
  const vicky = makePerson('Vicky', 24);
  
  
  // Uncomment these lines to check your work!
  console.log(vicky.name); // -> Logs 'Vicky'
  console.log(vicky.age); // -> Logs 24

  /* Here we are asked to create a function that accepts a name and age properties. Our function
  is goint to create an empty object and store properties within our object. With our first solution
  we created an empty object cache, and manually inserted two properties inside, name and age. We assigned
  both properties the value of the name and age arguments being passed in, and returned our object. Our 
  function was assigned to the variable vicky, with two args provided, then we used dot notation to access
  the value of those properties and log them to our console. In our second solution, very similar to our firsy
  we declare an empty object person. We then use dot notation to add requested properties to our person object
  instead of inserting the properties manually, then same steps were followed from the first solution*/

  /*CHALLEGEN: PERSONSTORE - Inside personStore object, create a property greet where the value is a function
   that logs "hello". */

   const personStore = {
	greet: function() {
    console.log('hello');
  }
 };

// Uncomment this line to check your work!
personStore.greet(); // -> Logs 'hello'

/* In this prompt we are asked to add a property to the provided object personStore. Our new property
greet will have the value of a function that logs the string 'hello' to the console. */

/*CHALLENGE: PERSONFROMPERSONSTORE - Create a function personFromPersonStore that takes as input a name and an age. 
When called, the function will create person objects using the Object.create method on the personStore object.*/

const personStore1 = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // Uncomment these lines to check your work!
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); // -> Logs 26
  sandra.greet(); // -> Logs 'hello'

  /* Here were asked to use the method Object.create to allow our function personFromPersonStore to create an object
  and have that object have access to the properties from PersonStore1. We delcare a varible person and assign it the
  value of an object instace of personStore1 using Object.create. We then use dot notation to assign the passed in paramaters
  as values to our properties name and age. Our personFromPersonStore function is assigned to our new variable sandra, with 2 args passed in
  sandras name and age, so when we log to our console using dot notation the name property in our new varible sandra, the name prints 
  to the console.*/ //When using Object.create() always assign it to a new variable, which will be the name of the object, to have access to said object.

  /*CHALLENGE: INTRODUCE - Without editing the code you've already written, add an introduce method to the personStore object 
  that logs "Hi, my name is [name]". */

  const personStore2 = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra1 = personFromPersonStore('Sandra', 26);
  
  // add code here
  personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
  }
  
  // Uncomment this line to check your work!
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

  /* Here were asked to add a new method 'introduce' to our personStore object. Introduce has the value of a function that logs
  'Hi, my name is [name]' to the console. Using dot notation we stored a new property in our personStore object, as instructed we 
  assigned our new propertie a function which logs the str asked for.In order to access the name property from an object instances
  that uses personStore, we use the 'this' key word.*/

  /*CHALLENGE: PERSONCONTRUCTOR - Create a function PersonConstructor that uses the this keyword to save a single property onto its
   scope called greet. greet should be a function that logs the string "hello". */

   function PersonConstructor() {
	this.greet = function() {
    console.log('hello');
  }
}
const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

/* Here were asked to use the 'this' key word in our constructor function to add a new property to any object instances, created
using the function. In our new greet property we assign the propery to a function which logs the string 'hello'. As we continue
we declare a new variable simon, and assign it to an object instance of personContructor using the 'new' keyword. The object simon
will now have access to all properties within our personConstructor.*/

/* CHALLENGE: PERSONFROMCONSTRUCTOR - Create a function personFromConstructor that takes as input a name and an age. When called,
 the function will create person objects using the new keyword instead of the Object.create method. */

 function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
    //add code here
      const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
  }
  
  const mike = personFromConstructor('Mike', 30);
  
  // Uncomment these lines to check your work!
  console.log(mike.name); // -> Logs 'Mike'
  console.log(mike.age); // -> Logs 30
  mike.greet(); // -> Logs 'hello'

  /* In this prompt we asked to creat an object instance of PersonConstructor but instead of using the Object.creat method, were going
  to use the new key word. We declared a variable person and assigned it to an instance of PeronConstructo with the new keyword, we then
  used dot notation to add 2 properties to our new object instance 'name' and 'age'. We assigned both properties to our passed in paramaters,
  and returned our object.*/

  /* CHALLENGE: INTRODUCE (CONT) - Without editing the code you've already written, add an introduce method to the PersonConstructor function
 that logs "Hi, my name is [name]".*/

 function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
  }
  
  const mike1 = personFromConstructor('Mike', 30);
  
  // add code here
  PersonConstructor.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
  }
  
  // Uncomment this line to check your work!
  mike.introduce(); // -> Logs 'Hi, my name is Mike'

  /* Here we are asked to add a new method to our PersonConstructor 'introduce'. Introduce will log a string to the console introducing the
  person Mike. To do so we use dot notation to access PersonConstructos protoype, and add the method introduce, we assignd the newly added 
  method a function which logs to the console our desired string. Within our code block we use the 'this' key word with the string literal in
  order to access our name property from our object instance.*/

  /* CHALLENGE: DOG CONSTRUCTOR - 
 Declare a function Dog that creates a new instance of a Dog object when invoked with the new keyword. Each Dog object should have a name property
 and a breed property, both strings which are passed in as arguments when calling the Dog function. It should also have a property called tricks,
 set to an array representing all the tricks that dog knows. When a new object is initiated, tricks should be empty.

 All of your Dog objects must also have access to two methods that are stored on the constructor's prototype:

 The first method, learnTrick, should take in a string as an argument and add that string to the tricks array of the particular Dog object it was called on.

 The second method, performTrick, should also take a string as an argument. It should check to see if that string is in the tricks array belonging to the Dog
 instance it was called on; if so, it should log the string 'name performed trick!' If not, log the string 'name doesn't know that trick. */

 function Dog(name, breed) {
	// add code here
 this.name = name;
  this.breed = breed;
  this.tricks = [];
 }

 Dog.prototype.learnTrick = function(str) {
  this.tricks.push(str);
 }

 Dog.prototype.performTrick = function(str) {
  if (this.tricks.includes(str)) {
    console.log(`${this.name} performed ${str}!`)
  }else {
    console.log(`${this.name} doesn't know that trick.`)
  }
 }
 const fido = new Dog('Fido', 'poodle');

 // Uncomment these lines to check your work!
 fido.learnTrick('fetch');
 fido.performTrick('fetch'); // should log 'Fido performed fetch!'
 fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'

 /* Here were asked to set up the function Dog, to creates new Object instances when invoked with the new keyword. We set up our Dog contructor
 using the 'this' key word to assign 3 properties to all instances of Dog, name which we assigned to the passed in name paramater, breed which we
 assigned to the passed in breed paramater, and trick which we assigned to an empty array to later store some values. We now are asked to add some
 methods to our object instances, learntrick, and performtrick. Learn trick is going to accept a str as an input and push the provided str into our 
 tricks property(array) in our dog constructor. PerformTrick also excepts one input a str, I then set a condition using the .includes method to check
 if our passed in str already exist in our tricks array, if so we log the desired str. */

 /*CHALLENGE: INVENTORY - Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your 
 Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches 
 the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) 
 and quantity, which should be initially set to 1.

 Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

 The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked,
 should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another
 item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and 
 replace the price with whatever number was just passed in.

 The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string
 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

 The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object
 for that item. If not, return the string 'Item is not in inventory'.*/

 function Inventory(item, price) {
    // add code here
    this[item] = {price: price, quantity: 1};
  }
  
  Inventory.prototype.addItem = function(item, price) {
    if (!this[item]) {
      this[item] = {price: price, quantity: 1};
    } else {
      this[item].quantity++;
      this[item].price = price;
    }
  }
  
  Inventory.prototype.deleteItem = function(str) {
    if (this[str] && this[str].quantity >= 1) {
      this[str].quantity--;
      return 'Deleted';
    }
      return 'Nothing to delete'; 
  }
  
  Inventory.prototype.checkItem = function(str) {
    if (this[str]) {
      return this[str];
    } else {
      return 'Item is not in inventory';
    }
  }
  
  
  const myInventory = new Inventory('cucumber', 2);
  
  // Uncomment these lines to check your work!
  myInventory.addItem('carrot', 1);
  console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
  myInventory.addItem('cucumber', 3); 
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
  console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
  console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'

  /* In this prompt we are asked to set up our Function inventory, to create object instances when declared with the new key word, inventory is going to store the items
  as keys in the object instance and have the value of an object with two properties, item and price. We will also set up 3 methods to our object instances will have access
  to via the objects prototype. We start by assigning the object instance the key value of the passed in item paramater using brakcet notation. We assign our new key to an object
  with the property price (passed in as paramater) and assign it to the passed in paramater, and the propert quantity which is assign to 1. Now we set up our methods withon our 
  prototypes using dot notation.
  **METHODS**
  (addItem)Our first method addItem takes in the same input as our function item, and price, the addItem method sets a condition checking to see if the object 
  instance has any properties already set that match the passed in item, if not we assign the passing in item as a key, and give it the value of an object with the properties price
  set to the passed in price, and setting quantity to 1 as we did before. Otherwise if the property already exist, we increment its quality by 1, and reassign its price property to the 
  price being passed in.
  
  (deleteItem) Our second method deleteItem accepts a str as an input. Here we set a condition to check if the object instance has a property value that equals the passed in str, and if 
  that object at the key of the passed in str has a quantity that is >= 1. If the condition is true, we decrement its quantity by 1 and return the string 'Deleted', otherwise if both those
  conditions do not meet, we simply return the string 'Nothing to delete'.
  
  (checkItem) Our third method checkItem accepts a single string as an input. It sets a condition checking if that passed in str exist as a property in our object instance, if it does, we return 
  that object, Otherwise we return the string 'Item is not in Inventory'.*/

  /* CHALLENEGE: PERSON CLASS - Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should 
  also have a method called greet that logs the string "hello".*/

  class PersonClass {
	constructor(name) {
    // add code here
	this.name = name;

	}
	// add code here
  greet(){
   console.log('hello');
 } 
}

 const george = new PersonClass('George');

 // Uncomment this line to check your work!
 george.greet(); // -> Logs 'hello'

 /* In this prompt we are working with Class. Class always has a constructo within to set properties to object instaces when invoked using the new key word, and stores the methods related to the instances
 within itself. We set our constructor to accept a name as input, and using the this key word created a propterty name and assingned it to the passed in name. We then create a method 'greet', which is a function
 that logs the string 'hello' to the console.*/

 /* CHALLENGE: DEVELOPER CLASS - Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce
 method. When called, introduce should log the string "Hello World, my name is [name]". */

 class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
 }

 // add code here
 class DeveloperClass extends PersonClass {
  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
 } 

 const thai = new DeveloperClass('Thai', 32);

 // Uncomment these lines to check your work!
 console.log(thai.name); // -> Logs 'Thai'
 thai.introduce(); // -> Logs 'Hello World, my name is Thai'

 /* Here we are asked to create a new class DeveloperClass, that creates objects by extending personClass, giving it access to all properties and
 functionality of the the PersonClass. We do by using the extends key word after out class declaration, within we add a method 'introduce' which 
 logs the string 'Hello world, my name is [name]. */

 /* CHALLENGE: CHAIN STORES - Declare a class Chain that creates a new instance of a Chain object when invoked with the new keyword. Each Chain object should have a name property, a totalStores property, and a locations property.
  The name property will be assigned to a string which is passed in as an argument when calling the Chain function. The totalStores property should be initialized to 0 and the locations property set to an array representing all the
  existing franchises of that chain store. When a new object is initiated, the locations array should be empty.

 Declare another class Franchise that creates a new instance of a Franchise object when invoked with the new keyword. Each Franchise object should have an owner property and a city property, both of which will be set equal to strings
 passed in as arguments to the constructor.

 All instances of your Chain class must also have access to two methods that are stored on the class's prototype:

 The first method, openStore, should take in 2 strings as arguments. Those strings should be passed into a new instance of a Franchise object as the arguments for the owner and city properties. The new instance of Franchise should be
 added to the locations array which belongs to the Chain instance the method was called on. The totalStores property should also be updated accordingly.

 The second method, closeStore, should take a single string as an argument. It should check to see if there is an instance of a Franchise with a city property that matches the input string in the locations array on the instance of Chain 
 the method was called on. If so, it should remove the instance from the locations array, update the totalStores property and display the string 'name closed the store in city!' If not, log the string 'name doesn't have a store in city. */

  


   

