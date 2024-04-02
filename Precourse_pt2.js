/*CHALLENGE 1 ARRAYS-EXAMANING ELEMENTS - Create a variable called 
fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). 
Then console.log fourthItem to see the output.*/

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

const fourthItem = horror[3];

// Write a console.log statement below to check your work!
console.log(fourthItem);

/*You can access the index of an array or strings. The first element will be 0, and so on.
This prompt is requesting to access the string 'Ghostface', which is the 4th string in this
array, meaning its at the 3rd index.

/*CHALLENGE 2 ARRAYS - ADDING ELEMENTS - Use a built-in JavaScript method to add another show 
to the netflixShows array. Then log your updated array to the console. */

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push('Bridgerton');

// Write a console.log statement below to check your work!
console.log(netflixShows);
 
/* Javascript has a few methods to alter arrays. 
PUSH() - adds items to the end of an array
POP() - removes the last item of an array
SHIFT() - removes the first item of an array
UNSHIFT() - adds new items to the beginning of an array */

/* CHALLENGE: FOR LOOPS - FUNDAMENTALS - Using a for loop, decrement countDown by one each time the 
loop runs until it equals 0, making use of looping functionality instead of logging each number separately. */

let countDown = 10;
// ADD CODE HERE
for (let i = 0; i < 10; countDown++) {
  console.log(countDown)--
}

// Uncomment the below line to check your work
console.log(countDown) // -> should print 0;

/* Loops allow you to run a block of code for a designated amount of times, all loops start 
with the for() key word. in this problem I used the most basic for loop to run the code. I 
set my condition so the code runs as long as i < 10 to give log a countdown from 10 */

/* CHALLENGE: FOR LOOPS AND ARRAYS - 1. Iterate through the synonyms array using a for loop, 
pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.
2. Use a second for loop to iterate through the greetings and console.log() each greetings */

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++) {
  greetings.push(`Have a ` + synonyms[i] + ' day!');
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let j = 0; j < greetings.length; j++) {
  console.log(greetings[j]);
}

/* I used a regular for loop to iterate through my synonyms array. I wanted access to each 
element in the synonyms array in order to push the new formed string into the greetings array.
For that I used the native push method which adds elements to the end of the array, forming
3 seperate greeting using each element within our array. Then we looped through our greetings
array, in order to log each new greeting one by one on to our console. */

/* CHALLENGE: FOR LOOPS AND ARRAY INDICES - For this challenge, loop through the arrays and push 
a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array 
holding the respective bios.*/

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++) {
  bios.push('My name is ' + firstNames[i] + ' ' + lastNames[i] + ' ' + 'and I am from ' + places[i]);
}
 console.log(bios);

 /* Here I begain with a regular for loop in order to have access to my elements in the firstNames
 array provided. Since were initilizing the variable i to 0, I can also access the indexes of my lastNames
 array and places array in order to form my bio string for each person. I concated my string with each element
 for each array at the index of i, which my for loop is able to access and form my desired string*/

 /* CHALLENGE: FOR LOOPS - CALCULATING ARRAY ELEMENTS - You are given an array of five numbers called increaseByTwo.
Use a for loop to iterate through the array and increase each number by two.  */

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] += 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

/* Here we use a for loop to iterate through our array increaseByTwo to have access to each element
within the array. Within our code block we are requesting that as I increments we want to add 2
to each element at the index of i*/

/* CHALLENGE: WHILE LOOPS - FUNDAMENTALS - Use a while loop to increment count by 2 on each repetition
of the block of code. Run the code block of your while loop until count is 8.  */

let count = 2;
// ADD CODE HERE
while (count < 8) {
  count += 2;
}

// Uncomment these to check your work!
console.log(count); 

/* This prompt has use a while loop, an alternative iterate statment which runs until the condition
within is no longer true. Our goal is to increment count by 2 until count is 8. We set our condition
to run as long as count is less than 8, and within our code block were using an addition assignment
operator to increment count by 2 until said condition is met.*/

/* CHALLENGE: WHILE LOOPS - CONDITIONAL EXPRESSION - Initialize a variable addThis to 0 and a variable
sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block,
add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum 
should be the sum of the numbers 0 through 9. It's crucial to note that if there's more than one statement 
in the loop block, the entire block needs to be enclosed in curly braces {}. This ensures that all statements 
within the block are executed together in each iteration of the loop */

// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum+= addThis;
  addThis++;
}

// Uncomment the line below to check your work!
console.log(sum);

/* Here we use a while loop to add the sum of all numbers from 0-9. We start off by declaring 2 variables
addThis and sum and initializing both to 0. We then set up our while loop with a condition to run the block 
of code within until the variable addThis is < than 10. Within our code block, we our using the addition
assigment to add the value of addThis to sum, and incrementing addThis by 1 each iteration. In the end we will
have the sum of all numbers from 0-9 added to our sum variable. */

/* CHALLENGE: CONTROL FLOW - IF STATEMENTS - Use an if statement to check if num is greater than 100. If num is 
greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num. */

const num = 40;
let final;
// ADD CODE HERE
if (num > 100) {
  final = null;
} else {
  final = num * 2;
}

// Log final to the console below to check your work
console.log(final);

/* We use an if statment to set a condition, stating to do whats in the code block as long as the condition
is true, attaching it with an else statment tells the code what to do in the case that the condition returns
false. We have two variables, on num which is given the value of 40, and final which is currently undefined.
we set our condition to check if num is > than 100, if so reasigned our final element to null, and with our
else statent we are asking that is said condition is not met to reassign final to be 2 * the value of num*/

/* CHALLENGE: FIZZBUZZ - Use a loop to iterate through the numbers 1 through 16. Push each number into fb, 
but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and 
"fizzbuzz" in place of numbers divisible by both 3 and 5 */

const fb = [];
// ADD CODE HERE
// iterate through numbers 1 - 16 and push each number in fb
// if num is % by 3 push str 'fizz'
// if num is % by 5 push str 'buzz'
// if num is % by 3 & 5 push str 'fizzbuzz';
for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push('fizzbuzz');
  }else if (i % 3 === 0) {
    fb.push('fizz');
  }else if (i % 5 === 0) {
    fb.push('buzz');
  }else {
    fb.push(i);
  }
}

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
console.log(fb);

/* Here we asked to loop through the numbers 1-16 and push each number into our fb array, but replace nums 
divisible by 3 and 5 to 'fizzbuzz, nums divisble by 3 to 'fizz' and nums divisble by 5 to 'buzz'. We start by
declaring a for loop set with a condition to run the code within as long as i is < or = 16. Within our code block
we use if statements to set conditions to end up with our desired array. Within each condition we use the module 
operator which check is i is divisible by said number and strictly = to 0, if so we would replace said number with the 
desired str. Each if statement checks for a different condition, with our last statment stating that if none of these
conditions apply, to simply add our current value of the varible i to our array*/

