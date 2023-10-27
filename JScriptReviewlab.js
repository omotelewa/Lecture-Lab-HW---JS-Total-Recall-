///////////////////////////////////////
// VARIABLE DATATYPES
//////////////////////////////////////

// A. Q + A
// 1. How do we assign a value to a variable?
 //An assignment operator is used to assign a value to a variable.
// 2. How do we change the value of a variable?
// A variable is set by using the name of variable as a parameter and the parameter value is set to the new variable..
// 3. How do we assign an existing variable to a new variable?
 //By assigning the value of that variable to another variable using the assignment operator.
// 4. Remind me, what are declare, assign, and define?
// You declare a JavaScript variable with the var or the let keyword.
// To assign a variable is to  is to give the variable a value.
// to define a variable use const or let keyword
// 5. What is pseudocoding and why should you do it?
 // seudocode is a detailed yet readable description of what a computer program or algorithm should do. It is written in a formal yet readable style that uses a natural syntax and formatting so it can be easily understood by programmers and others involved in the development process.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // maybe about 85%

//////////////////////////////
// STRINGS
/////////////////////////////

// 1. Create a variable called firstVariable
//let firstVariable
// 2. Assign it the value of the string "Hello World"
let firstVariable;
// 3. Change the value of this variable to some number
 let variable = 15
// 4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = ("fruits")
// 5. Change the value of secondVariableto any string.
//let secondVariable = ("Cherries")
// 6. What is the value of firstVariable?
//The value is cherries.
// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

  let finalwords = (firstVariable +  secondVariable +  yourName)
// console.log(firstVariable)
// console.log(variable)
// console.log(yourName)
// console.log(secondVariable)
// console.log(finalwords)

//////////////////////
// Booleans
/////////////////////
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Kevin' >= 'Kevin');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false <= false)
// console.log(e >= 'Kevin');
// console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a >= a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 >='48');

////////////////////////////
// THE FARM
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal = "dog";
// if (animal === "cow"){
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! You're not a cow."); 
// }
       
///////////////////////
// DRIVERS ED
//////////////////////
// 1. Make a variable that holds a person's age; be semantic
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 11; 
// //check if over 16
// if(age >= 16) {
// //you are of age
// console.log("Here are the keys")
// } else {
//     console.log("Sorry you're too young!");
// }

//////////////////
// LOOPS
/////////////////
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 0; i <= 10; i++){
//         console.log(i)
// }

// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }

// for(let i = 12; i <= 4000; i++){
//     if( i % 3 == 0) {
//         console.log(i)
//     }
// }

////////////////////
// GET EVEN
///////////////////
// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0) {
//      console.log(i + ' is even');
//     }
//     }

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
//     if (i % 2 == 0) {
//         console.log('is even');
// }
// }

///////////////////
// GIVE ME FIVE
//////////////////
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0)
//         console.log("i found a " + i + " High Five !");
//    else if (i % 3 === 0) console.log("three is a crowd");
//    else console.log(i); 
// }

////////////////////////
// SAVINGS ACCOUNT
///////////////////////
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// 2. Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

/////////////////////////
// SAVINGS ACCOUNT
////////////////////////
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// 2. Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0
    for(let i = 0; i <= 10; i++){  
      bank_account += i;
  }
    //  console.log(bank_account)

    let bank_accountb = 0
    for(let i = 0; i <= 100; i++){  
      bank_account2 += i;
    } 
    bank_accountb *= 2;
    // console.log(bank_accountb)

////////////////////
// ARRAYS & CONTROL FLOW
///////////////////
// 1. What are the things in an array called?
// elements
// 2. Do Arrays guarantee those things will be in order?
// no specific order (arrange how you want)
// 3. What real-life thing could you model with an array?
//    a carton of eggs

//// Easy Does It /////
// Create an array that contains three quotes and store it in a variable called quotes
//  let quotes = ["Sia Collection", "Humble", "Nike"]
//  console.log(quotes)

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
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass.splice(4,4, "octocat") 
// console.log(ourClass)
// Add a new element, "Cloud City" to the array
ourClass.unshift("cloud city")
// console.log(ourClass)

///////MIX IT UP
// Given the following
 const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Pizza")
// console.log(myArray)
// Remove the 5from the beginning of the array.
myArray.shift([0])
// console.log(myArray)
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.splice(4,1)
// console.log(myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
// console.log(myArray)

///////////////
// BIGGIE SMALLS
//////////////
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
// let num = 101
// if (num < 100 ) {
//     console.log("little number")
// } else {
//     console.log("big number")
// }
// console.log(num)

////////////////
// Monkey IN THE MIDDLE
///////////////
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// let num = 8;
// if (num < 5 ) {
//     console.log("little number")
// } else if (num > 10)
//     console.log("big number")
//  else {
//     console.log("monkey")
// }
// console.log(num)

///////////
// WHATS'S IN YOUR CLOSET
//////////
const kristynsCloset = [
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
let thomsShirt = thomsCloset[0][0];
  let thomsPants = thomsCloset[1][0];
  let thomsAccessory = thomsCloset[2][1];
 // console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants}, and ${thomsAccessory}!`);
 thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset[1][2]);
// console.log(thomsCloset)

//////////////
// FUNCTIONS
/////////////
function printGreeting(name) {
    return "Hello there, " + (name);
  }
//   const greeting = printGreeting("Slimer");
//   console.log(greeting)

function printCool(name) {
    return `${name} is cool`;
  }
  const greeting = printCool("Captain Reynolds");
//   console.log(greeting);

function calculateCube(sideLength) {
    const volume = Math.pow(sideLength, 3);
    // console.log(`The volume of a cube with a side length of ${sideLength} is ${volume}`);
  }
  
  calculateCube(7);

function isCharAVowel (char) {
 
    if (char === 'a'&&'e'&&'i'&&'o'&&'u') {
        return "The character is a Vowel";
    }
    else {
    return "The character is not a vowel";
    }
}
// console.log (isCharAVowel ("r"));

// function getTwoLengths(food1, food2){
//     let length1 = food1.length
//     let length2 = food2.length
//     return [length1, length2]
// }
//  const lengths = getTwoLengths("pizza", "hamburgers")
// console.log(lengths)

// function getMultpleLengths(food1, food2, food3, food4, food5){
//     let length1 = food1.length
//     let length2 = food2.length
//     let length3 = food3.length
//     let length4 = food4.length
//     let length5 = food5.length
//     return [length1, length2, length3, length4, length5]
// }
//  const lengths = getMultpleLengths("pizza", "hamburgers", "fries", "ice cream", "spaghetti")
// console.log(lengths)

// function maxOfthree(x, y, z) {
//     if (x >= y && x >= z) {
//       return x;
//     } else if ( y >= x && y >= z) {
//       return y;
//     }  else {
//         return z;
//     }
//       }
  
//   console.log(maxOfthree(3, 56, 6));


function findLongestWord(wordArray) {
    if (wordArray.length === 0) {
      return 'Nothing';
    }  //Edge case
  
    let longestWord = wordArray[0];
    for (let i = 1; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
        longestWord = wordArray[i];
      }
    }
  
    return longestWord;
  }
  
  const words = ['Pizza', 'balloon', 'Mississippi'];
  const longest = findLongestWord(words);
//   console.log(longest); 

////////////
// OBJECTS
///////////

const user = {
    name: "AJ",
    email: "aj@gmail.com",
    age: 32,
    purchased: []
}
// console.log(user)
user.email = "@JA@email.com"
// console.log(user)
 user.age = 25
// console.log(user) 
user.location = "California"
// console.log(user)
user.purchased.push("carbohyrdates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
// console.log(user)
// console.log(user.purchased[2])
user.friend = {
    name: "II",
    age: 27,
    purchased: []
}
// console.log(user)
// console.log(user.friend.name)
user.friend.location = "Floride"
// console.log(user.friend.location)
user.friend.age = 29
// console.log(user.friend.age)
user.friend.purchased.push("The One Ring", "A latte")
// console.log(user.friend.purchased[1])

////////////////
// LOOPS
///////////////
for(let i = 0; i < user.purchased.length; i++ ){
    // console.log(user.purchased[i])
}
for(let i = 0; i < user.friend.purchased.length; i++){
    // console.log(user.friend.purchased[i])
 }

 ////Functions can operate on objects
//  Write a single function updateUser that takes no parameters. When the function is run, it should:
//  it should increment the user's age by 1
//  make the user's name uppercase
//  The function does not need a returnstatement, it will merely modify the user object.
//  Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
 function updateUser(){
    user.age++;
    user.name =
    user.name.toUpperCase()     
    }
    updateUser();
    // console.log(user.name);
    // console.log(user.age);

function OldandLoud (person){

}
console.log(user)













//=============================================================
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


















