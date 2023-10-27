//I. Variables & Datatypes
//To answer these questions, you can add them in a multiline comment section inside of script.js

//like this:

/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
*/

//A. Q + A
//1.//How do we assign a value to a variable?
//let a = 5;
//How do we change the value of a variable?

//let variable = 10;
//variable = 15; //reassignment

//let name;
//name = "Jane"

//How do we assign an existing variable to a new variable?
let x = 21;
let y = x;
//Remind me, what are declare, assign, and define?
//Declare is used to specify the variable name and its data type. 
//Assign is used to give value to the variable.
//Define tells what data type the variable is.
//What is pseudocoding and why should you do it?
//Pseudocoding is writing the logic in englsh withoud actual coding.  This helps to layout the steps to actually write the code.
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//You should spend about 60% of the time thinking about how you're going to solve a problem vs actually typin inthe code to solve it.



//
//B. Strings
//For all other questions that involve writing code, you can solve them via the following instructions.

//Create a variable called firstVariable
/*
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/

let firstVariable = "Hello World";
firstVariable = 23;
let secondVariable = firstVariable;
secondVariable = "Hello Olivia";
firstVariable; // The value equals the number 23.

let yourName = "Isha"
console.log("Hello , my name is " + yourName);



// Booleans
/////////////////////
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
console.log(false)


// console.log(c > d);
console.log(false)
// console.log('Kevin' >= 'Kevin');
console.log(false);
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false <= false)
// console.log(e >= 'Kevin');
// console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a >= a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 >='48');
console.log(true);

////////////////////////////
// THE FARM
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

 let animal = "cow";
 if (animal === "cow"){
 	console.log("mooooo");
 } else {
 	console.log("Hey! You're not a cow.");
 }


///////////////////////
// DRIVERS ED
//////////////////////
// 1. Make a variable that holds a person's age; be semantic
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

 let age = 11; 
 //check if over 16
 if(age >= 16) {
 console.log("Here are the keys")
 }else 
   console.log("Sorry you're too young!");
// }

//////////////////
// LOOPS
/////////////////
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

 for (let i = 0; i <= 10; i++){
         console.log(i)
 }

 for(let i = 10; i <= 400; i++){
     console.log(i)
 }

 for(let i = 12; i <= 4000; i++){
     if( i % 3 == 0) {
//         console.log(i)
//     }
// }

/*A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/
let a
for(a=0; a<=10; a++)
console.log(a);



/*B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
let i;
for(i=1; i<100; i++)
console.log(i);


/*C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
*/
//let num;
if(num <=100){
  console.log("I found a member.  High five!")
}else if  (number%5){
 console.log("I found High five!")
}else  (number%5==0)
  console.log("I found a 10, High five")
  
}

//I found a 5. High five!
//I found a 10. High five!


Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:

I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!


For numbers divisible by both three and five, be sure your code prints both messages



D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/

function savingsAccount(x,y) {
  let bank_account = $55;
}
console.log savingsAccount


*/



////////////////////
// ARRAYS & CONTROL FLOW
///////////////////
// 1. What are the things in an array called?
 elements
// 2. Do Arrays guarantee those things will be in order?
// no specific order (arrange how you want)
// 3. What real-life thing could you model with an array?
//    a carton of eggs

//// Easy Does It /////
// Create an array that contains three quotes and store it in a variable called quotes
  let quotes = ["Sia Collection", "Humble", "Nike"]
  console.log(quotes)

////// Accessing elements //////
// Given the following array 
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings.splice(2,2, "world")
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

///// Change values
// Given the following array 
let ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass.splice(4,4, "octocat") 
// console.log(ourClass)
// Add a new element, "Cloud City" to the array
ourClass.unshift("cloud city")
// console.log(ourClass)

//E. Mix It Up
/*Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
*/


///////////////
// BIGGIE SMALLS
//////////////
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
 let num = 101
 if (num < 100 ) {
     console.log("little number")
   } else {
     console.log("big number")
 }
 console.log(num)

////////////////
// Monkey IN THE MIDDLE
///////////////
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
 //If the number entered is more than 10, log big number.
 //Otherwise, log "monkey".
 let num = 6
 if (num < 5 ) {
     console.log("little number")
 } else if (num > 10)
     console.log("big number")
  else {
     console.log("monkey")
 }
 console.log(num)

///////////
// WHATS'S IN YOUR CLOSET
//////////
let kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  
//   console.log("kristyn is rocking that " + kristynsCloset[2] + " today") 
kristynsCloset.splice(6,0, "raybans")
// console.log(kristynsCloset)
kristynsCloset[5] = "stained knit hat";
//  console.log(kristynsCloset)
const thomsShirt = thomsCloset[0][0];
  const thomsPants = thomsCloset[1][0];
  const thomsAccessory = thomsCloset[2][1];

  console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants}, and ${thomsAccessory}!`);
//   console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants}, and ${thomsAccessory}!`);
thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset[1][2]);


IV. Functions


/*A. printGreeting
Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

Like so?
*/

function printGreeting(name) {
  return `Hello, ${name}!`;
}
const greeting = printGreeting("Slimer");
console.log(greeting);

/*You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
*/
function printGreeting(name) {
  return `Hello, ${name}!`;
}
const greeting = printCool("Tiger");
console.log(greeting);


/*B. printCool
Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
*/

console.log(printCool("Captain Reynolds"));
 "Captain Reynolds is cool";


//C. calculateCube
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

 
function calculateCube(sideLength) {
  const volume = Math.pow(sideLength, 3);
  console.log(`The volume of a cube with a side length of ${sideLength} is ${volume}`);
}

calculateCube(7);



/*D. isVowel
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
*/

function isCharacterAVowelat(char){
  if(char === "a"||"e"||"i"||"o"||"u")
  {
    return true
  }
  else {
    return false
  }
   console.log(isCharacterAVowelat("i"))
}



//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLength(food1, food2){
  let length1 = food1.length;
  let length2 = food2.length;
      return [lenght1, lenght2]
}
  return[length1, lenght2] 
}
console.

log(getTwoLengths("Hank", "Hippopopalous"));



F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths([array]){
let x;
}


console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]




//G. maxOfThree
//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

function maxOfthree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if ( y >= x && y >= z) {
    return y;
  }  else {
      return z;
  }
    }


//Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().


//H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


function getLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return '';
  }  

  let longestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord;
}

const words = ['Beatiful', 'California', 'Sierra Leone'];
const longest = printLongestWord(words);
console.log(longest); 

getLongestWord('This is a string, the longest word and its length will be printed on the console. Isn\'t it incredible ?');



//Objects
//Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


/*A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
*/

let user= {
  name: "John",
  age: 30,
  email: "john@gmail.com",
  purchased: [],

}
user.email ="john@gmail.com"
user.age = 78;

console.log(user);

user.email = "John"
console.log(user);

//user.age = 26;
//console.log(user.age);







/*B. Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
*/
user.age = 26;
console.log(user.age);

//C. Adding keys and values
//You have decided to add your user's location to the data that you want to collect.
user.location ="California";
console.log(location);

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other ////location (a string).

const location;
user.locatioin = "California"
console.log(location);


/*D. Shopaholic!

Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.

*/
const user = {
  name: 'John',
  email: 'john@aol.com',
  age: 30,
  purchased:[]
}
console.log(user);
user.email = 'john@aol.com'
user.age = '78',
console.log(user);
user.locatioin = "California"
console.log(user);
user.purchased.push['carbohydrates']
user.purchased.push['peace of mind']
usr.purchased.push['Merino jodhpurs']
//console.log(user)
//console.log(user.purchased[2])

console.log(user);
console.log(user.purchased[2]);

//console.log(user.friend.age)
user.friend.purchased.push('The one Ring', 'A latte')
//console.log(user.friend.purchased[])
console.log(user);

/*E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}*/

user.friend = {
  name: 'James',
  age: 67,
  purchased: []
}

//When we console.log user, we would see the friendobject added to our user object.

console.log(user)
console.log(user.friend.name);
user.friend.loation = 'California';
console.log(user.friend.location);
user.friend.age = 67
console.log(user.friend.age)




//Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
//Console.log just the friend's name;
console.log(user.friend.name)
//Console.log just the friend's location
console.log(user.friend.location)
//CHANGE the friend's age to 55
user.friend.age=55
//The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")
//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
//Console.log just "A latte" from the friend's purchasedarray.


//
/*F. Loops
Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to thc onsole.*/

for(let i =0; i < user.purchased.length;i++)
console.log(user.purchased[i]);

/*Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
*/


/*G. Functions can operate on objects
Write a single function updateUserthat takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a returnstatement, it will merely modify the user object.

Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
*/


Requirements Complete! Hungry for More?



Cat Combinator



1. Mama cat
Define an object called cat1that contains the following properties:

name
breed
age (a number)
console.log the cat's age
console.log the cat's breed



2. Papa cat
Define an object called cat2that also contains the properties:

name
breed
age (a number)



3. Combine Cats!
The cats are multiplying!

Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
Example:

combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }

This is to demonstrate that functions can take objects as arguments

You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

Make it so the combineCatsfunction will return a combination of the two incoming cats

The result should be an object wherein the

name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between
Example:

console.log(combineCats(cat1, cat2));
Result:



This is to demonstrate that a function can return an object





4. Cat brain bender
If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

catCombinatorcan use itself as its own argument.

Take a second to stew on that . . .

What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .

The above console.log is two levels deep of combineCats.

Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:


















