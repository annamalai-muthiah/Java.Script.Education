// ******************************************************** Variables and Constants ********************************************************8
// Variable definition
let sentence = 'Jesus saves but the law condemns'; //string literal
let age = 30; //number literal
let isIntelligent = true; //boolean literal
let mysteryVariable; // type can't be defined. Therefore undefined type.
console.log(sentence); //Way to output the message on the node console. Similar to print function in many other languages. This message did not appear on the web page because it appears inside the console of the webpage
//alert(sentence); //produces a message name on the browser. 

// Explaining the concept of null variables
let blankVariable = null; // undefined but blank value. It can be assigned in the future to any type.
console.log(typeof(blankVariable)) // does not come out as null. Instead comes out as object. Interesting!
blankVariable = 1;
console.log(typeof(blankVariable)) // instead of print, if you want the value to appear in the console, try console.log()

//Dynamic typing
age = 'TBD'
console.log(typeof(age)) // see age, though initially a number, can now become a string. This is called dynamic typing of variables.

// The following are the type of reference variables in JavaScript (JS):
//1. Objects (store variables that describe the properties of an person/entity), 
//2. Arrays (stores a list of values) and 
//3. Functions

//Objects: indicated by the use of {}. I suppose there is no class definition as in R, Python and C++. There could be but an object definition made to be as easy and flexible as possible
let Person = {
    firstName : 'Annamalai', // note variable values are assigned by :
    middleName : null,
    lastName : 'Muthiah',
    Age : 35
    };
// 1-element object 
let test = {
    element_test : 'test'
    };

// Variables within an object can be referenced statically or dynamically.
//static reference by actual element name
console.log(Person.middleName) //output value is null
// Dynamic reference: This is particularly useful when the variable to be referenced within an object is not known before hand and 
// is dependent on other factors such as an user's request etc. 
let var_to_be_referenced = 'firstName'
console.log(Person[var_to_be_referenced]) 

//Arrays Part 1: Defintion 
let colorsILike = []
console.log(colorsILike) // is []
colorsILike = ['Blue', 'Brown'];
//Index of an array in JS starts with 0 much like C++
console.log(colorsILike[0])
//Dynamic property of JS is indeed powerful: Array can be expanded to store more values as well as different types of values anytime. 
colorsILike[4] = 5;
console.log(colorsILike) // note JS even allows you to skip locations to store values. JS dynamically makes arrays to be as accomodative as possible without throwing up errors.

//Array Part 2: properties
// Arrays are objects.
console.log(typeof(colorsILike)); // proof 
// since an Array is an object, it has properties/functions within it that can be referenced. 
console.log(colorsILike.length); //length is a property/function within the array that calculates its length

// Functions 
// A function sometimes has input parameters (e.g. firstName and lastName in the example below) & output parameters (e.g. greetings in the example below)
function greet (firstName, lastName) {
    greetings = 'Hello' +  ' ' + firstName + ' ' + lastName // Generating a greeting message by concatenating the words with space in between them
    return greetings; // return the greetings as the output of this function 
} // function defintion is the only variable definition that does not end with ;
console.log(greet('Annamalai', 'Muthiah')) // calling the function and printing the result of the function on the console 


// ************************************************* Operators ****************************************//
// There are five different types of Operators in JS - Arithmetic, Assignment, Comparison, Logical and Bitwise

// Arithmetic operators - addition, substraction, multiplication, division, 
// remainder (indicated by symbol %),  exponent operator (indicated by symbol '**'), increment and decrement 
// The first 5 are fairly straightforward. However the exponenet, incremenet and decrement operators operate unsually which I wanted to highlight.
let x=10; 
let y=3;
//Exponent
console.log(x**y) //this is equivalent to the expression x^y,  a common expression in many programming languages
// Increment and Decrement operators
console.log(--x) // outputs the updated value of x = x - 1
console.log(x) //outputs the updated value of x (9)
console.log(x++) // outputs the value of x first (9) before updating the value of x = x+1
console.log(x) //  outputs the updated value of x (10)
console.log(++x) // outputs the updated value of x = x+1
console.log(x) // outputs the updated value of x (11)

//Assignment operator ("=" symbol)
//Nice tricks to update the value of x using a combination of arithmetic operators (+, -, *, /, %, **) and assignment operator
x++; // equaivalent to x = x+1 (x=12)
x+=5; // equivalent to x = x+5 (x=17)
x%=3; // equivalent to x = x % 3 (x=2)
x**=3; // equivalent to x = x**3 (x=8)
console.log(x); // outputs the value of x (=8)

//Comparison operators 
// How to use inequality operators to conduct test on x values
console.log(x>3); //output is true since x>3
console.log(x>=3);//output is true since x = 8
console.log(x=8); //output is 8 and not true or false. So always use === for comparing equality between variables.
console.log(x===8); // output is true 
console.log(x!==5); // output is again true as x is not equal to 5

//Equality operators: JS has varying standards of equality - 
//strict equality: one of type and value equivalence (indicated by ===) 
// loose equality,and another that just compares values and not type (indicated by ==)
console.log('001' == 1); // value is true because in this case the value on the right hand side (rhs) is converted to the type of the left hand side (lhs) and then compared
console.log('0001' == true); // value is true since boolean true is equal to 1 
// I feel == tries its best to match rhs value and lhs value and provides its output
console.log('001.1' == 1); //false because of the inequality between 1.1 and 1 

// Ternary operator (if-else statement. Ternary means compose of three parts)
x=5
let numberType = x%2==0 ? 'even' : 'odd' 
console.log(numberType); // output is 'odd' because x = 5

// If the console is crowded and you want to clear your JS console, input ctrl+L

// Logical operators - Logical AND(&&), OR(||) and NOT(!). These operators operate on boolean values (true or false). These operations are useful for decision making 
// Logical AND takes boolean inputs and if all of the are true, its output is true
// Logical OR takes boolean inputs and if atleast one of them is true, its output is true
technicalChallengePassed = true
interviewPassed = true
salaryOutsideRange = true
console.log('Good Candidate: ' + (goodCandidate = technicalChallengePassed || interviewPassed))
console.log('Strong Candidate: ' + (strongCandidate = technicalChallengePassed && interviewPassed))
console.log('Salary Expectation Match: ' + (!salaryOutsideRange))
console.log('Hired: ' + (hired = technicalChallengePassed && interviewPassed && (!salaryOutsideRange)))

//How do logical operators treat non-boolean value?
// sometimes values are not always neatly boolean. Thankfully logical operators approximates their values are truthy and falsy
// falsy values - 0, NaN (Not a Number), undefined, false, null, ''(empty string)
// truthy value - any value that is not falsy
// Between two truthy values, || outputs the first value (A||B = A) while && outputs the second (A&&B = B)
userChoice = ''
defaultChoice = 'Scrambled'
console.log('Final Choice:' , (userChoice || defaultChoice)) // another way to output without requiring + because JS console.log() naturally leaves space between ,
userChoice = 'SunnySide'
console.log('Final Choice:' , (userChoice || defaultChoice))

technicalChallenge = 'Yes'
interview = 'Yes'
salaryRangeTest = 'No'
console.log('Hired: ' + ((technicalChallenge && interview) || salaryRangeTest))

// Bit-wise operator converts numbers to their respective bit positions and conducts logical operation on each of those bits (or is represented by symbol | and and is represented by &)
// This could be extremely useful to assign read, write and execute permissions on files
const readPermission = 1 // In other words, converted to bits 1 = 00000001 and it is a constant. Therefore, a permenant standard
const writePermission = 2 // 2 = 00000010 
const executePermission = 4 // 4 = 00000100
// If the user is to be assigned more than one previlege, it is done in the following way:
ordinaryUserPermission = readPermission
strongUserPermission = readPermission|writePermission // (3 = 00000011)
superUserPermission = readPermission|writePermission|executePermission //(7= 00000111)
// now you can ask the question, is a strong user permitted to execute a file? Then logical 'and' operation is conducted on each of the bits between execute persmission and user permission. 
permission = (strongUserPermission & executePermission)?'yes':'no'
console.log(permission);

//swapping values of two numerical variables without using a third variable
a = 1;
b = 2;
// challenge is to switch their values
a = a + b
b = a - b
a = a - b
console.log(a);
console.log(b);



// ************************************************************************ Conditional Statements ***************************************************************

// Standard if-else statement. The excellent thing about ifelse syntax in JS is that it does not mandate an else statement if you don't want one.
msg= 'good evening';
time = 1900
if (time >= 600 && time < 1200) {
    msg = 'good morning';
} 
else if (time >= 1200 && time < 1800) { //else if and not elseif
    msg = 'good afternoon';
} 

console.log(msg);

// Switch case 
let role= 'guest'; // can be a number case or even a boolean case
switch (role) {
    case 'guest':
        console.log ('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');    
}


// *******************************************************************************Loops in JS: for loop, while loop and do-while loop *********************************************************************
// for loop: print odd numbers from 1 to 100
for (let i=1; i<=100; i++){
    if (i%2 !== 0) console.log(i);
}

// while loop: print odd numbers from 1 to 100
let i=1; // you have to separately define this variable unlike for loop where it can be defined inside the loop
while (i<=100) {
    if (i%2 !== 0) console.log(i);
    i++;
}

//do-while loop: it is different from while loop in that the code chunk is executed atleast once before the condition at the end (i<=100) is checked.
i=1;
do {
    if (i%2 !== 0) console.log(i);
    i++;
} while (i<=100);

//Infinite loops will cause the java script engine on your web browser to execute for ever, thereby crashing the browser.

// for-in loop with an object: you can cycle through elements of an object without requiring incrementing the index of location. 
Person = {
    firstName : 'Annamalai', // note variable values are assigned by :
    middleName : null,
    lastName : 'Muthiah',
    Age : 35
    }
for (let index in Person) {
    console.log(index+": "+Person[index]) 
};
// output is 
//firstName: Annamalai
//middleName: null
//lastName: Muthiah
//Age:35

// for-in loop with an array
colorsILike = ['Blue', 'Brown', null, null, 5];
for (let index in colorsILike) {
    console.log(index+": "+colorsILike[index]);
}
//output is
// 0
// 1
// 2
// 3
// 4

// for-of loop does away the indexing altogether and directly accesses each element of an array. This does not work with an object.
for (color of colorsILike) { // it replaces in with off
    console.log(color);
}

// break helps to break out of a loop. 
// At 5, the loop stops. SO the output is 0,1,2,3 and 4.
for (let i=0; i<=10; i++){
    if (i==5) {
        break;
    }
    console.log(i);
}

//Usage of 'continue' is programming is discouraged. It disrupts the flow of a loop and sends the loop back to to the next iteration skipping any code in between.
i=0
while (i<=10) {
if (i%2 == 0) {
    i++;
    continue;     
}
console.log(i);
i++;
}

// *****************************************************Examples of functions to solve short problems *****************************
//function to determine whether a picture is landscape or not
function isLandscape(width, height) {
return (width>height);  //take advantage of conditional evaluation because result is either true or false.
}
console.log(isLandscape(14.6, 5));

// Fizzbuzz problem:
// 1. return Fizz if divisible by 5
// 2. return Buzz if divisible by 3
// 3. return FizzBuzz if divisible by both 5 and 3
// 4. return the input back if not divisible by either 5 or 3
// 5. return 'not a number' message if the input is not a number
function fizzBuzz(num){
if (typeof (num) !== 'number') { // isNaN(num) returns true if num is a boolean value (true or false). SO I could not use isNaN()
    return "Not a Number!";
}
else if (num%15 == 0) return "FizzBuzz";
else if (num%5 == 0) return "Fizz";
else if (num%3 == 0) return "Buzz";
else return num;
}
console.log(fizzBuzz(15))

//Demerit problem:
// speed upto speedlimit (70), msg 'ok';
// for every multiple of 5 over 70, 1 demerit point; use Math.floor(1.3) function
// 12 points and over -> license suspended
console.log(checkSpeed(110));
function checkSpeed(speed) {
const speedLimit = 70;
const maxDemeritPoints = 12;  
const kmPerPoint = 5; 
if (typeof speed !== 'number') return 'Enter a number!';
else {
if (speed <= speedLimit + kmPerPoint) return 'Your speed is ok';
else {
const demeritPoints = Math.floor(speed-speedLimit)/kmPerPoint;  //this special function is from Math library. 
//demeritPoints is a constant because you don't want it to be raised or lowered later. 
if (demeritPoints >= maxDemeritPoints) return 'Your license has been suspended';
else return ('You have earned '+ demeritPoints +' demerit points. Slow your speed down to less than 70'); 
// + always works to construct a string. ',' works to build a string only in console. While in '+', you have to leave space, in console, ',' naturally leaves space between the strings being concatenated.
}
}
}


//Function to show numbers from 0 to X (limit) and indicate if they are odd or even
// you made a mistake here: return is also instruction to leave the function. 
showNumbers(limit = 50); // displays number up to the limit
function showNumbers (limit) {
    
    for (let i=0; i<=limit; i++){
    //One way:
    //if (i%2 === 0) console.log (i, "EVEN");
    //else console.log (i, "ODD");

    // Alternate:
    console.log(i, (i%2==0 ? 'EVEN' : 'ODD'))

}
}


//Function to count the number of truthy values in an array
//falsy values are 0, NaN, false, '', undefined and null. Truthy is everything else. JS approximates all values to either boolean true (truthy) and boolean false (falsy) if forced to.
// note if statement does not have to accompanied by anything else in JS.
const array = [2, 3, NaN, "", ' '];
console.log("The number of truthy values in the array:", countTruthy(array));

function countTruthy (array) {
    let count = 0;
    for (value of array){ //length(array) and len(array) are not acceptable in JS.
    if (value) count++; // if the element is either truthy or falsy. 
    }
    return count;
}



// Function to display the string properties of an object
const Movie = {
    Title: 'Roja',
    Director: 'Mani Rathnam',
    Music: 'Rahman',
    Year: 1992,
    Ratings: 5
}; //obj definition ends with ";" while function defintion does not.

showProperties(Movie);

function showProperties(obj){
    let noOfStringElements = 0;
    for (let index in obj) // if you only have a single statement under a for loop, you don't need {} braces. Same as ifelse.
      if (typeof(obj[index]) == "string")  
        console.log(index, obj[index]); // it is nice to arrange if statement as one below another.
}



// function to display sum of multiples of 3 and 5 within a limit
var limit = 20;
console.log('The sum of multiple of 3 and 5 within', limit, 'is:', sumOfMultiplesof3and5(limit));

function sumOfMultiplesof3and5(number) {
    sum = 0;
    for (i=1; i<=limit; i++) 
      if ((i%3==0)||(i%5==0)) // note || instead of |
          sum+=i; // see += 

    return sum; // see lines that are related to be close to each other and indentation is nice too.         
}


// function to estimate grade of a student
// You can set up a table to assign grades or map function or you can do if-else

const marks = [30, 60, 80];
console.log("The student's grade is:", calculateGrade(marks));

function calculateGrade(marks) { 
  avgMarks = calculateAverage(marks); //A separate function because 1 function = 1 job.
  // JS really has done away with if-else. And see how JS uses the sequence to its advantage to do away with redundant lines of code.
  if (avgMarks<60) return 'F';
  if (avgMarks<70) return 'D'; // the other way is avg=>60 && avg<70 
  if (avgMarks<80) return 'C';
  if (avgMarks<90) return 'B';
  return 'A';
}
function calculateAverage(array){
  let sum = 0;
  for (value of array) {
     sum+=value; 
  }
  return sum/(array.length); // interesting that it is not marks.length() - standard way to invoke a function
}



// function to display stars/aestriks
showStars(19);

function showStars(rows){
  for (let i=1; i<=rows; i++)
      console.log(printStars(i));
}
function printStars(num){
 let starString = '';
 for (let i=1; i<=num; i++)
     starString+='*';
 return starString;
}



// function to display prime numbers
limit = 29;
showPrime(limit);

function showPrime(limit) {
for (number=2; number<=limit; number++)  // 1 is neither prime or composite
    if (checkPrime(number)) // it is attractive for the loops and statements to follow a hierarchy.
        console.log(number); 
}
function checkPrime(number){
    for (factor=2; factor<number; factor++) // start at 2 because prime number is be divisible by 1.
        if (number%factor===0) 
            return false;
        
    return true;
}


// *****************************************************Objects *****************************
// objects are collection of key-value pairs. The properties of objects are keys of the objects and their respective values and they are usually related.
// Building an app for drawing shapes
// object called circle. Its properties are radius, x and y coordinates
let circle = { // An object could also hold another object or function or an array inside itself.
radius: 1,
location: {
x: 0, 
y: 0
},
isVisible: true,
draw: function (){ // I suppose input variables to a function can be void.
console.log('draw');
},
Author:['Annamalai',null,'Muthiah']
};

// Object Oriented Programming
// functions within an object, such as draw, are known as methods.
circle.draw(); //method
console.log(circle.Author[1]);

// Factory Function for objects (seems like an alternative to class definition)
function createCircleObject(radius, location){
return { // An object could also hold another object or function or an array inside itself.
        radius: radius,
        location: location,
        isVisible: true,
        draw: function (){ // I suppose input variables to a function can be void.
        console.log('draw');
        },
        Author:['Annamalai',null,'Muthiah']
        };    
} 
// simplified factory function syntax in JS
function createCircleObject(radius){
    return { 
            radius, //when key-value pair are the same labels inside an object, it can be simplified to only label.
            // location, isVisible and Author - not important
            //location: location, 
            //isVisible: true,
            draw (){ // function syntax can also be shortened inside an object.
            console.log('draw');
            },
            // Author:['Annamalai',null,'Muthiah']
            };    
    } 

  const circle1= createCircleObject(radius = 3);
  console.log(circle1);

// Constructor Function for objects (why was factory function not enough?)
// Job of this function is to construct/create an object.
// Constructor function uses Pascal Notation: First letter of every word is capitalized. 
// Camel Notation: First letter of every word save the first word is capitalized. Camel notation is used everywhere else.
// no return function is used in this approach.
// all objects in JS are dynamic. You can always add properties and methods to them after they are created.

function CircleObject (radius) {
 this.radius = radius; // adding a new variable to an empty object by 'this'. 'this' refers to the object executing this piece of code.
 this.draw = function (){
     console.log('draw');
 }
}
let circle2 = new CircleObject(2); //new creates an empty object, executes the function and returns the object back to the same spot.
// let x = {} is an empty object recognized by {} brackets.
console.log(circle2);

// Dynamic nature of JS objects.
circle2.color = 'Yellow';
circle2.proverb = function () {
    console.log ('There is no way to square a circle');
}
console.log(circle2);

delete circle2.proverb;
console.log(circle2);

// Constructor is an inbuilt property of a JS object that stores the function that constructed the object.
//object.constructor tells you the function that was used to create the object
console.log(circle2.constructor) // shows the function definition of 'CircleObject' that was used to construct the object 'Circle2'
console.log(circle1.constructor) // since 'Circle1' was created using built-in JS method of object definition, that is, using {} (object literal definition), 
// the function that created the object was a built-in constructor function in JS, f Object() {[native code]} (notice the caps in Object)
x = {}; // under the hood, what is happening is, let x = new Object (). How does it know to invoke the Object function and not any other constructor function.
// Other constructor functions in JS: new String(), new Number() & new Boolean() // notice caps. We generally tend to use the literal definitions for these variable types.
// every object naturally comes with methods especially the 'constructor' method but other properties inside the objects vary.

//*************************************************Aside ************************************************************
// Functions are Objects in JS!
typeof(CircleObject); // result in an object 
// if CircleObject is an object, it should have a constructor function
console.log(CircleObject.constructor); //result is a function called Function () {} while objects get defined by constructor function called 'Object ()'
// Basically all the variables in JS are objects that are defined by different constructor functions.
x=3;
console.log(x.constructor) // result is a f Number() {[native code]} showing that the object x was created using the constructor function Number()
// however different objects carry different properties and methods but all of them carry the property, 'constructor'. 
// Few other properties of the function object 'createCircleObject'.
console.log(createCircleObject.name) // Name of the function
console.log(createCircleObject.length) // Length of its arguments
// A function object has few other interesting properties such as call, bind, apply, toString() and properties such as name, length (# of arguments), argument, caller, prototype, etc and ofcourse the 
// property called constructor.
console.log(createCircleObject.constructor); // returns the constructor 'Function()' that was used to create this function
// creating a object constructor function as an object created by 'Function()', a native JS constructor function and then using it to create objects.
const circleObjectCreatorNative = new Function('radius', `
    this.radius = radius; 
    this.draw = function() {
    console.log('draw');
}
`); 
const circle3 = new circleObjectCreatorNative(5);
// new operator invokes circleObjectCreatorNative.call({}, 5). 'this' inside the constructor function will refer to {}. That's the protocol in JS with new
// another way: circleObjectCreatorNative.apply({}, array). apply requires array as the argument for the function.
console.log(circle3);

// ******************************************************Variable types and their relations to the properties of an object*****************
// Primitive variables/value types (boolean, string, numbers, undefined, null, symbol). 
// Primitives are copied by value and once values are copied, labels are separated and no longer point to the same location
// When y=x, value of x is copied on to location of variable y.
x =10;
y =x;
x = 20;
console.log(x);
console.log(y); 
console.log(x.constructor);
// if x and y are reference variables/objects (objects, arrays and functions), they only store the address of the memory location of the object
// reference type variables/objects are copied by their references/addresses.
x = {value:10};
y = x;
x.value = 20
console.log(x.value);
console.log(y.value);
// Important: function inputs are copied by the function and values inside the function are inside the scope of the function unless they are returned.
number = 20;
function increase (number) {
    ++number; // number++ is tricky if you are returning number in the same step. number++ will only be updated in the next step. Alternative is ++number.
    return number;
}; 
console.log(number);
console.log(increase(number));
// On the other hand, instead of a primitive, if you use an object, the function variable representing the object will still point to the same object
number = {value:10};
function increase (obj){
    obj.value++;
}
increase(number);
console.log(number);

//Cycling through the properties and methods of an object
let circle4 = {
radius : 4,
draw () {
console.log('draw');    
}
};

for (let index in circle4) 
console.log(index, circle4[index]); //outputs the name of the property/method and the respective values

// alternate ways of cycling through an object
for (let index of Object.keys(circle4)) { //for-of loop will only work if the items are easily iteratable like in an array. object.key[circle4] will produce an array of the names of properties and methods
    console.log(index); // I wonder why circle4 did not carry the keys function.
}

for (let index of Object.entries(circle4)){
    console.log(index);
}

('draw' in circle4) ? console.log('yes') : console.log('no'); // just "in" to check if a property/method present in an object.

// cloning an object
let another = {};
for (key in circle4) 
    another[key] = circle4[key];
console.log(another);
// alternate method of cloning an object
another = Object.assign({color:'yellow'}, circle4); // you can combine more than one object using assign.
console.log(another);
//cloning by spread operator
another = {... circle4};
console.log(another);

// Garbage collection - a program that runs in the background and deallocates memory from variables no longer being used.

// Built-in objects in JS
// Math object
// useful source for this object is developer.mozilla.org or google search "math object in javascript"
// Mth.pi and Math.abs
// Math.random return randon number between 0 and 1.
// Math.round () returns the rounded-up number
// Math.max returns maximum value and Math.min

// String objects
const message = '           This is my first message'; // A long white space has been included to precede the message.
console.log(typeof(message)); //string
// when string variable is defined using string literal, you expect it to be a primitive variable. 
// However, JS wraps it like an object with methods and properties as if it has had been defined using a constructor function.
// It has many of the methods now available.
//String object
const message1 = new String ('This is my first constructor message');
console.log(typeof(message1)); //object
// JS string methods in google searched using "javascript string" @ developer.mozilla.org
console.log(message.length) // length of the message in terms of characters - you want to ensure the user does not exceed or under write his response by measuring the length 
// of the string.
console.log("a", "\n", "b"); // a and b are in different lines 
console.log("This is a very long string which needs \nto wrap across multiple lines because \notherwise my code is unreadable."); 
// sentences in different lines. Success for "\n"
console.log(message[0]); // T
console.log(message[1]); // h
// I had to replace "," with "+"  below beause "," naturally adds a white space to the output
console.log(message.includes("my") + '\n' + //true. checks if a certain string is part of the larger string/ note the '\n' is carraige return for the output to be on the next field.
            message.startsWith("You")+ '\n' + // false. checks if a given string starts with a certain string
            message.startsWith("this")+  '\n'+ // false. String starts with 'This' and not 'this'. Search is case sensitive.
            message.endsWith("message")+  '\n'+
            message.indexOf("my")+  '\n'+ //provides the position of "my" in the string. If there are more than 1 matches returns the first location.
            message.replace('message', 'announcement')+  '\n'+ //replaces and outputs the replaced string
            message.toUpperCase()+  '\n'+ //outputs the uppercase version of the message.
            message.trim()+  '\n'+  // eliminates white spaces before and after our message. It has a few variations such as trimleft() and trimRight()
            message.split(" ")); // returns an array of string fragments split on " ".
// Escape notation: special characters are all preceded by backslash "\"
// \n  can be used in two ways as shown above

// Template literal
// String primitives are not good with string formatting.
// There are a few literals we have encountered so far - Object {}, String ("", ''), Boolean (true/false) and  Template Literals achieved by ``.
let newMessage = 
'This is my\n' +
'\'first\' message'; 
console.log(newMessage);
// Template literals (``) help to cast the message in the exact form you want including overcoming difficulty with carriage feed as well as special characters such as " ' "
// Just type what you want like an email and it will appear in the exact same style.
let anotherMessage = 
`This is my 'new' 
and modified message`;
console.log(anotherMessage);
// Expressions/constants/variables/function calls within template literals using placeholders (${})
let Name = 'John'
//let Suffix = (Name=='Annamalai')?'Raam':'3';
let kindOfDay = (Name=='Annamalai')?'Good':'Blessed';
Greetings = 
`Hello ${Name} ${(Suffix = (Name=='Annamalai')?'Raam':'3')}, 
Have a ${kindOfDay} Day`;
console.log(Greetings)


// Date objects (more on the different formats for the date constructor - refer to Javascript date google document)
let now = new Date(); //shows presents date. 
let date1 = new Date ('27/12/2020'); // JS calls this invalid date string
let date2 = new Date ('Dec 27 2020 10:00 pm'); //cycle through the different versions of date constructors and use the input type that fits your need.
//date 2 is string version
let date3 = new Date (2020, 11, 27, 22); // date 3 = date 2 except that it is number format. Month goes from 0 to 11. The other elements naturally get set to 0.

console.log(now);  // similar to date string along with time and time zone.

// get methods within an object 
console.log(now.getMonth()) // 11 referrring to December
// set methods
now.setFullYear(2018);
console.log(now); // full fledged date and time string with the changed year.
// date type conversion
console.log(now.toDateString()); //Day Month Date Year. Why is this called Date String?
// Note unless you specify (), you won't get the output of the function unless it is a property.
console.log(now.toTimeString()); // captures the time alone and no mention of date or month or year.
console.log(now.toJSON()); //Backend communication: YYYY-MM-DDTGMT.624Z. T stands for time. 
console.log(now.toISOString()); // Seems like same as JSON()
console.log(date2); // full fledged date and time string
console.log(date3); // full fledged date and time string
//Based on Mirth Script
//date2.get('yyyy/MM/dd') // does not work

// an object with street, city and zip code elements and create a function called 'showAddress()' to display the values of the object
let Address = {
    Street: 'Desire',
    City: 'New York City',
    zipCode: '22901'
};
function showAddress(Address) {
for (key in Address) {
 console.log(key, Address['key'])
}
}
showAddress (Address);

// Constructor and Factory function to initialize an object
function addressObjectGen (Street, City, zipCode){
   return {
    Street,
    City,
    zipCode    
    };
}
let addressObj = addressObjectGen('Le Parc Terrace', 'Charlottesville', 22901)
console.log(addressObj);

function AddressObjectConstructor (Street, City, zipCode){
    this.Street = Street;
    this.City = City;
    this.zipCode = zipCode;
};
let addressObject = new AddressObjectConstructor ('Le Parc Terrace', 'Charlottesville', 22901)
console.log(addressObj);

// Object equality 
let address1 = new AddressObjectConstructor ('a', 'b', 'c');
let address2 = new AddressObjectConstructor ('a', 'b', 'c');
let address3= address1;
address1.Street = 'a1';

function AddressObjectConstructor (Street, City, zipCode){
    this.Street = Street;
    this.City = City;
    this.zipCode = zipCode;
};

//values between two objects are same or not
function areEqual (address1, address2){ //the keyword Function is a reserved word for the constructor function
//    let equal = true;
//for (key in address1) {
// if (address1['key'] != address2['key']) {
//     equal = false;
//     break;
// }    
//}

//return (equal) ? 'They are equal' : 'They are not equal';

return (address1.Street === address2.Street && address1.City === address2.City && address1.zipCode == address2.zipCode) 
       ?  'They are equal' //&& - logical and 
       : 'They are not equal'
}

// referencing the same object or not
function areSame(address1, address2) {
return (address1 === address2)? 'They are the same': 'They are not the same'
}

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))

// blog post object 
let blogPost = {
Title: 'Tips and Tricks of JavaScript',
Body: 'Java Script has strong resemblance to C++.',
Author: 'Annamalai Muthiah',
Views: 12,
Comments: [
    {Author: 'Leanna Muthiah', Body: 'Annamalai Muthiah is my hubby'},
    {Author: 'Annamalai Muthiah', Body: 'My world revolves around my wife'}
],
isLive: false // I initially had it as 'No'
};

console.log(blogPost) 
// Besides output (not easiest to read, it produces a template format (_proto_: array/object 
// and functions contained within each prototype) below the output 

// blogging engine. 
// Drafting a post but have not published it yet- what should the constructor function look like?
function BlogEngine (title, body, author) {
    this.Title = title; // as opposed to : and ; instead of ,
    this.Body = body;
    this.Author = author;
    this.Views = 0; // this can be incremented with each additional view. 
    this.Comments = []; // values can be added later.
    this.isLive = false; 
}

blogTitle = 'A new blog engine';
blogBody = 'I made this post using a blog engine constructor function';
blogAuthor = 'Annamalai Muthiah';

Post1 = new BlogEngine (blogTitle, blogBody, blogAuthor); 
console.log(Post1)

//Array of objects
// Price range objects.
// 3 price ranges- low, mid and high price ranges

// function PriceRangeObjectCreator(nameOfBusiness, City, pinCode, Country, averageMainCourseMealPrice){
// this.Business = nameOfBusiness;
// this.City = City;
// this.pinCode = pinCode; 
// this.Country = Country;
// this.averageMainCourseMealPrice = averageMainCourseMealPrice;
// priceCutOff = [30, 45, 80];
// this.priceRange = (averageMainCourseMealPrice < priceCutOff[0]) ? 'Low Price Range' : 
//                   (averageMainCourseMealPrice < [priceCutOff[1]]) ? 'Mid Price Range' :
//                   'High Price Range'
// } 

// nameOfBusiness = 'Good Eats';
// City = 'Melbourne';
// pinCode = 22901;
// Country = 'Australia';
// averageMainCourseMealPrice = 45;

// let priceRangeObject = new PriceRangeObjectCreator (nameOfBusiness, City, pinCode, Country, averageMainCourseMealPrice); 
// console.log(priceRangeObject);

//Author's solution (Array of object style, objects inside an array do not have to have labels/names)
let priceRanges = [
{label : '$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10},
{label : '$$', tooltip: 'moderate', minPerPerson: 11, maxPerPerson:20}, // I used the concept of cutoff
{label : '$$$', tooltip: 'expensive', minPerPerson: 21, maxPersPerson: 30}
]

let restaurants = [
    {averagePerPerson:10}
];

/////////////////////////////////////////////////////Arrays ////////////////////////////////////////////////////////////////////
// Alt + up/down to navigate program lines up and down the script
const numbers = [1, 2, 3];
console.log(numbers);
//Arrays are objects and hence have built-in functions. 
// Push - add values to the end of an array
numbers.push(4,5);
// Adding elements can be added to the beginning of the array using function named unshift
numbers.unshift(1,2,3);
// Middle using splicing
numbers.splice(2, 3, ['a', 'b']) // order of arguments: starting position (right before the starting position), # of elements to be deleted followed by the elements to be inserted.  
numbers.splice(2, 1,'a', 'b')
console.log(numbers);

// finding elements in an array
// primitive search is easier, that is, primitive variables
const numbers1 = [1, 2, 1, 3, 4];
console.log(numbers1.indexOf('a')) // return the position or -1 if not present. How about NA?
console.log(numbers1.indexOf(1,starts = 2)) // returns the first position the value is located. else -1. second argument tells where to start your search from.
console.log(numbers1.lastIndexOf(1)) // return the last position of where the value is located
// presence of an element in an array
console.log(numbers.indexOf(3) !== -1) // true means the element is present
console.log(numbers.includes(1)) // true means element is present



// finding reference variable type in an array
const courses = [
                 {id:1, name:'a'}, 
                 {id:2, name:'b'} // In an array of objects, though object itself won't have names, fields will have to specified                     
                ];
console.log(courses.includes({id:1, name:'a'})) // false because equality comparison will result in reference comparisons since they are reference variables 
// when in need of clarification of a function , a good source is developer.mozilla.org. find seems like a good function
//here is an example
let ab = [12, 13, 44, 67, 87];
result = ab.find(function(element) {
    return element>10; // Interesting that 'find' returns the element that returns true from the function and stops immediately after that. Why can't it check with all the elements?
    // if no element returns true, it returns undefined. 
})
console.log(result)
// returns the element that matches (if no element matches returns undefined)
console.log(courses.find(function (course){ // I replaced element in find with the variable name course 
    return course.id === 1;
})) 
// return index of the element that matches (if there is no index that fits, returns -1)
console.log(courses.findIndex(function (course){ // I replaced element in find with the variable name course 
    return course.id === 2;
})) 

// Arrow functions (function is separated from body using the arrow function and it helps to syntactically reduce a function within a function)
console.log(courses.find(course => { // arguments are separated from its body by => arrow function. If not parameter, do ()
    return course.name === 'a';
}))
console.log(courses.findIndex(course => course.name === 'b')) // returns 1, the index value
console.log(courses.find(course => course.name === 'b')) // you can eliminate ';', return and {} if there is only line of code that is returning something


// Removing elements from an array - beginning, end or middle
ab = [12, 13, 44, 67, 87];
// delete in the end
let lastNumRemoved =ab.pop()
console.log(lastNumRemoved);
console.log(ab);
// deletes in the beginning
console.log(ab.shift()) // just outputs the deleted number and not ab.
// delete in the middle
ab.splice(1, 2, 'a', 'b', 'c');
console.log(ab)


/////////////////////////////////////////////////// Emptying an array ////////////////////////////////////////////////////
// solution # 1 to empty an array.
let numbers2 = [1, 2, 3, 4, 5];
another = numbers2 //another and number2 are reference variables having reference to the same location. Changes can be made to the value at the 
// location through either variable.
numbers2 = []; // You are assigning a different reference to numbers2. 
// This change won't be reflected by another 
console.log(numbers2)
console.log(another)

// solution # 2 to truncate the length of an array
numbers2 = [1, 2, 3, 4, 5];
another = numbers2 
numbers2.length = 0 // empties the array
console.log(numbers2)
console.log(another) // since 'another' refers to the same location as referenced by number2, change done on one variable 
// is reflected by both variables.

// solution # 3 is to use splice method
numbers2 = [1, 2, 3, 4, 5];
another = numbers2 ;
numbers2.splice(0,numbers2.length);
console.log(numbers2)
console.log(another)

// solution # 4 is to use pop method
numbers2 = [1, 2, 3, 4, 5];
another = numbers2;
while (numbers2.length > 0) 
numbers2.pop();  // performance cost becomes significant as the number of function calls increases dramatically with a large array.
console.log(numbers2)
console.log(another)

// solution #2 is the best as solution # 3 is not as compact as solution # 2.

//-------------------------------------- Combining and slicing an array ------------------------------------------
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(start = 3, end = 5); // ends before location 5.  Interesting!
console.log(sliced);
let sliced1= combined.slice (start =3); // no end 
console.log(sliced1);
let sliced2 = combined.slice ();// copy of the array 
console.log(sliced2);

//What happens when an element of an array is an object?
//Its reference gets copied and passed as you go about concatenation and slicing.
first.push({id:1});
combined = first.concat(second);
console.log(combined);

first[3].id=10;
console.log(first)
console.log(combined)

//-----------------------------------------Spread Operator (...) --------------------------------------------------------
// Spread operator is avaiable in ES6
first = [1,2,3];
second = [4,5,6];

// Concatenation
combined = [...first, ...second]; // different from [first, second] because it will be an array composed of 2 arrays.
console.log(combined)

// copying the values and not reference
// previous method was by slicing
let copy = [... combined]

// -----------------------------------------Iterating an array ------------------------------------------------------------
first = [1,2,3];
//Iterating through the elements of an array
for (let element of first)
    console.log(element); // no need for {} if there is only one line in the loop

//call-back function is a function within a function
first.forEach((value, position) => console.log(position, value)); // first value in the call-back function within forEach defaults to the value 
// while the second value defaults to position of the value.

// --------------------------------------Joining arrays -----------------------------------------------------
// question mark next to a parameter in a function definition means it is an optional parameter

// join the elements of an array
first = [1,2,3];
console.log(first.join(','));

let msg1 = 'This is a JavaScript introductory tutorial';
arrayOfParts = msg1.split(' '); // returns an array of the parts of the message.
console.log(arrayOfParts.join(' ')); //recreates the message back.
// Above technique is useful while splitting strings based on spaces and joining them by '-' for URL creation.

// -----------------------------------Sorting a numerical array ----------------------------------------
first = [3,10,1];
console.log(first); 
first.sort(); // sorts by converting numbers into string. So number sorting is done poorly
console.log(first); 
first.reverse(); // reverses an array
console.log(first);

let courses1 = [{name:'English', id:1}, {name:'node.js', id:2}, {name:'Accountancy', id:3}];
console.log(courses1); // somehow the sort function affects this line too though sort is called only after this line
courses1.sort(function (a,b) // we use the sort function's protocol to compare two values
{// if a>b, return 1
// if b>a, return -1
// if a ===b, return 0
// since string comparisons are done by converting them to Ascii convention, convert strings to the same case.
nameA= a.name.toLowerCase();
nameB= b.name.toLowerCase();

if (nameA> nameB) return 1; // no need of ifelse because if it fulfills the if clause, it returns and exits the function
if (nameA< nameB) return -1;
return 0;
}
)
console.log(courses1);

// ------------------------------ Every and Some ------------------------------------------
let nums = [1,2,3,-1, 4];

// 'every' will check every element but will stop as soon as an element returns false on the chosen criterion.
let atleast1PositiveOrNot = nums.every(function(value){ // index and array are other parameters available
                              return value>=0;  // checking if values are true or not and returns positive
                         })
console.log(atleast1PositiveOrNot);

// 'some' will check atleast if one element that matches criterion. So will stop as soon as it hits the first true.
let atleast1Positive = nums.some(function(value){ // index and array are other parameters available
    return value>=0;  // checking if values are true or not and returns positive
})
console.log(atleast1Positive);

// ------------------------------------Filter an Array -------------------------------------------
nums = [1,2,3,-1, 4];

let positiveFiltered = nums.filter(num => num >=0); // returns an array of elements that return true to the criterion
console.log(positiveFiltered); 

// ---------------------------Mapping an Array (powerful) ---------------------------------------------------------
// Map the elements of an array to html markup items

nums = [1,2,3,-1, 4];
positiveFiltered = nums.filter(num => num >=0); // returns an array of elements that return true to the criterion

// We are going to map all the positive elments in nums array to a HTML list item element
let htmlListItems = positiveFiltered.map(n => '<li>'+n+'</li>') // <li> = list item element: displays number as a bullet point
// console.log(positiveFiltered)  - result does not get stored in the same array
console.log(htmlListItems)

// join all the list items into a string
catListItems = htmlListItems.join(sep='') // by default comma is the separator in join. So "" is used to set it to blank.
console.log(catListItems)
// As you can see html elements have been put together.
// Only remaining piece is the UL element. 
// You may have seen UI in Shiny but this is <ul></ul> html markup to get bullet pointed numbers 
let htmlProper = '<ul>'+catListItems+'</ul>'

// Map the elements to an object
let objectList = nums.map(
num => { 
return {id: num};
}
)
console.log (objectList);
// Alternate
objectList = nums.map(num => ({id: num}));
console.log (objectList);

//----------------------------Chaining multiple methods (powerful) ------------------------------------------------------
nums = [1,2,3,-1, 4];
// pipeline of methods: array output from one method passed as inputs to another method
finalResult = nums
    .filter(num => num>=0)
    .map(num=>({id:num}))
    .filter(obj => obj.id>1)
    .map(obj => obj.id);
console.log(finalResult)

// ----------------------------Reducing an Array (powerful) ------------------------------------------------------------
// Reducing values in a list/array by calculations

nums = [1,2,3,-1,4];
// traditional method to calculate sum of array elements
sum = 0;
for (let n of nums) 
sum +=n;
console.log(sum);

// Calculate sum by reduce method
// accumulator = 0; // This is ok. apparently the reduce function's accumulator value can be initialized within reduce function itself
sum = nums.reduce(function(accumulator, currentValue) { // first reservation: how will it know if I'm accesing the value, array etc.? By using the names of variables they have defined in the prototype
// or (ii) how will you keep the accumulator from being initialized to starting value every time the function is executed for each value.
    // accumulator +=currentValue;
    return accumulator + currentValue;// gets stored in previousValue (accumulator here)
}, 0)
 
console.log(sum)

// simplifiction of syntax using arrow function 
// if accumulator not initialized, accumulator = first current value
sum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

// ----------------------------- Excercise # 1 on Arrays -------------------------------------------
function arrayFromRange(min,max){
let array1 = [];
for (let i=min; i<=max; i++) array1.push(i);
return array1;
};

let arrayResult = arrayFromRange(min=1, max=4);
console.log(arrayResult)

// ----------------------------- Exercise # 2 on includes ---------------------------------------------
function includes(array, searchElement){
return array.some(element => element==searchElement)  // don't forget every and some return true/false
}

array1=[1,2,3,4];
console.log(includes(array1, 3)) //equivalent to console.log(array1.includes(5))

//  -------------------------------- Exercise # 3 on Except ----------------------------------------
function except(array, exceptValues) {
    return array.filter((element, array = exceptValues) => 
                         !(exceptValues.includes(element)));
}

let array2 = [1,2,4,6,7,10, 10,10, 1, 2,];
let exceptValues= [1,2,10];
let output = except(array2, exceptValues);
console.log(output)

// -----------------------------------Exercise # 4 on Move an Element -----------------------------
// Function to move an array element by offset value
// You could have done the if-else inside the function by just typing return in the end. You could return nothing and end the function. 

function move(array, index, offset) {
   if ((index+offset >= array2.length)||(index+offset < 0)) {
    console.error ("Invalid Offset Value"); 
    return;
   } 
   element = array[index];
   array.splice(index,1); // array gets processed. 
   array.splice(index+offset, 0, element);
   return array;
}

array2=[10, 8, 5, 1, 2, 3, 8];
let index = 1;
let offset = 2; // offset can lead to out of limit, proper array and no movement (offset = 0)

let arrayProcessed = move(array2, index, offset); 
console.log(arrayProcessed);

// --------------------------------- Ex 5 - Count Occurences -------------------------------------
// Simple implementation
// Reduce is alternate way to count elements due to the accumulator function
// if number not present, return 0

function countOccurences (array, searchElement)
{    //let count = 0;
//   // Simple implementation
//   for (let element of array) 
//   if (element === searchElement) count +=1;
//   return count;
  
  // Reduce implementation
 count = array.reduce((accumulator, element) => 
 {if (element == searchElement) accumulator+=1;
    console.log(accumulator, element, searchElement); // just to monitor what is going on 
    return accumulator;}, 0)
 return count;

}

let array4 = [1,2,3,4,1,5,4,5,4];
count = countOccurences (array4, number=4);
console.log(count);


// ------------------------------------Ex 6 - Get Max --------------------------------------------------
// Getting the maximum value in an array
array4 = [1,2,3,4,1,6,5,4,5,4];
// array4 = [];
max = getMax(array4);
console.log(max)

function getMax(array4) {
if (array4.length === 0) return null;  //you can return NaN, undefined too. If you have nothing to return (just typing a message), you can just do return then.  

// Simple approach
// max = array4[0]// Always do let max
// for (element of array4)
// if (element > max) max = element;
// 
// return max;

// Reduce approach
// max = array4.reduce((accumulator, currentValue)=> (currentValue>accumulator)?currentValue:accumulator);
// return max;

// Reduce approach (easy on the eyes)
max = array4.reduce((a,b)=> a>b?a:b);
return max;
}

// ---------------------------------Ex7 - Movies ---------------------------------------------------------
const movies = [
    {title:'a', year:2018, ratings:4.5}, 
    {title:'b', year:2018, ratings:4.7}, 
    {title:'c', year:2018, ratings:3.0}, 
    {title:'d', year:2017, ratings:4.5}, 
];

// All the movies in 2018 with ratings >= 4
// Sort the result based on ratings in descending order (array sort function sorts the array without output)
// Sort is meant to sort in ascending order if you return negative for the ascending order
// number sorting is done by sorting them as strings.
// Instead of looping, I am going to use filter function of array

movies.filter(value => value.year===2018 && value.ratings>=4)
      .sort((a,b)=> b.ratings-a.ratings) // you can keep it as a.rating-b.rating and do a reverse.
      .map((value => value.title))
      .forEach(value => console.log(value))


// ---------------- Functions in detail ---------------------------------------------------------------------------
// walk function declaration. 
walk();
function walk () { 
    console.log('walking is good for you');
}

// function expression (this is how it is done in R)
let run = function () {
    console.log('run');
}; // this is an anonymously named function expression (has no name). You can refer to it by the variable name 'run'
// semicolon at the end of variable expression as opposed to function declaration.
run();

let jog = run; // move and run referencing the same anonymous function expression.
jog();

// function hoisting
// Hoisting is the process of moving all function declarations to the top of the file by the engine 
// and hence you can call and execute the function before the function declaration.
// It is not the same process when you define function as a variable/constant using function expressions.

// Dynamic function arguments (useful for defining a function that accepts varying number of arguments)
// arguments to a function gets stored inside the element called 'arguments' of the function object.
// you can usually cycle through index meaning element names but not values but here you can since there is an object iterator

let sum2 = function () {
    let total = 0;
    console.log(sum2.arguments); // the object 'argument' within function stores callee, arguments represented by indices that also has an iterator
    // , symbols etc.
    for (let value of arguments) 
     total += value;
    return total;
}

console.log(sum2(1,2,3,4,23));

////////////  Rest operator - very useful for building dynamic function with varying number of arguments
let sum1 = function (...args) { // rest operator looks exactly the same as spread operator. It packs args into an array, in this instance, called args
console.log(args) //array of arguments. If you instead only have the word "args", it will refer to the first argument you pass to the function
}
// the advantage of having an array instead of an object called 'arguments', suddenly all the different 
// functions of the array will become available to you. Rest operator does the inverse of spread operator - one packs the values 
// in an array while the others breaks open and releases the values

let sum3 = function (...args){ 
console.log(args.reduce((sum,value)=>sum+value))   
}
sum3(10,67,89);

let priceCalculator = function (discount, ...prices) {
let totalPrice = prices.reduce((a,b) => a+b);
return (1-discount)*totalPrice; // it is good to store the total in a separate variable for other purposes and accesses
}
console.log(priceCalculator (0.2, 20, 30)); //20% discount
// rest has to be the last parameter. That's why it has been given the name rest: rest of the arguments that can then be packed into an array


//////////////// Default parameters in a function
let interestCalculator = function (principal, rate, years) {
    rate = rate || 3.5; //concept of truthy like undefined || truthy value = truthy value. Note output is not the boolean value = true.
    years = years || 5;
    return principal * rate/100 * years; 
}

console.log(interestCalculator (10000, undefined,7));

// Another option for Default parameters - to define it on the function definition but once defined, every other variable following it should 
// have a default value. I can understand, it is hard to assign things otherwise.
// just make sure default value definitions are the last set of values in function definition so that you can pass as much as you can
// and the last set of parameters get assigned values by default
interestCalculator = (principal, rate=3.5, years=5) => principal * rate/100 * years; 
console.log(interestCalculator(20000));

/////////////////////// Getters and Setters
Person = {
    firstName : 'Annamalai',
    lastName : 'Muthiah'
};
console.log(Person);
Person.firstName = 'Raam';
console.log(Person); // it does get modified.
// However if you want to set new values to the whole object, you will have to access those items one-by-one

console.log(Person.firstName+' '+Person.lastName);
console.log(`${Person.firstName} ${Person.lastName}`); // using template literal to print full name
// Instead of having to print full name in multiple places by typing this cumbersome expression again and again
// One can create a method inside the object to do that
Person = {
    firstName: 'Annamalai',
    lastName: 'Muthiah',
    fullName () {
       return `${this.firstName} ${this.lastName}` ;
    }
}
Person.firstName = 'Mosh';
console.log(Person.fullName())

//getters to access properties
Person = {
    firstName: 'Annamalai',
    lastName: 'Muthiah',
    get fullName () {
       return `${this.firstName} ${this.lastName}` ; // get = getting a property value from other values
    },
    set fullName (value) {
    let parts = value.split(' ');   //split() will return an array called parts 
    this.firstName = parts[0]; 
    this.lastName = parts[1]; // no return value. return is not mandatory for a function.
    }
}
Person.firstName = 'Mosh';
console.log(Person.fullName); // because of get, you can access functions like properties
//setters to set property values (you can use the same method name)
Person.fullName = 'Jalsa Salsa';
console.log(Person.firstName);
console.log(Person) // the Person object's full name property is a function that executes and returns a value.
// due to get prefix, the method also doubles as property. Very interesting!


////////////////////Error handlers - try and catch
// console.error("This is how error is done"); // console.error() over console.log() has a red appearance indicating error as opposed to regular console message 
// return is a way to stop a function and exit without any major trouble. In other words, to make a function call a non-event

// what does try do? try allows you to test a block of code for errors than running the whole piece of program.
Person = {
    firstName: 'Annamalai',
    lastName: 'Muthiah',
    get fullName () {
       return `${this.firstName} ${this.lastName}` ;
    },
    set fullName (value) {
    let parts = value.split(' ');   //split() will return an array called parts 
    this.firstName = parts[0]; 
    this.lastName = parts[1]; // no return value. return is not mandatory for a function.
    }
}
Person.fullName = 'true wonk'; //This won't work becase split is not a method within a boolean value. 
// Therefore, uncaught (is it not unexpected) type error. Same with null(undefined)
console.log(Person.firstName);
console.log(Person)

// Defensive programing: Error handling at the beginning of the function or method so that we can ensure values are right type and 
// shape before we execute our functions.
// Here is how to modify, for example, our setter function so that the person's full name is of the proper type

Person = {
    firstName: 'Annamalai',
    lastName: 'Muthiah',
    get fullName () {
       return `${this.firstName} ${this.lastName}` ;
    },
    set fullName (value) {
    // method 1: catching error    
    if (typeof value !== "string")  return; // messages error and exits.
       // console.error('sorry, enter a proper full name'); This may scare people. Nice to just return nothing, end and exit the function
       // and leave the object set to default value above.

    let parts = value.split(' ');   //split() will return an array called parts 
    this.firstName = parts[0]; 
    this.lastName = parts[1]; // no return value. return is not mandatory for a function.
    },
    get fullName () {
        return `${this.firstName} ${this.lastName}` ;
     }
}
Person.fullName = true; //This won't work becase split is not a method within a boolean value. 
// Therefore, uncaught (is it not unexpected) type error. Same with null(undefined)
console.log(Person.firstName, Person.fullName); // just returns the default Annamalai Muthiah. This is another way of keeping 
// default parameters in an object apart from mentioning them in the function declaration.


//"throwing an exception" is a way to display error message.
// throw new error ('error message') will also do the same thing
// Instead of return yo
Person = {
    firstName: 'Ganesh',
    lastName: 'Muthiah',
    get fullName () {
       return `${this.firstName} ${this.lastName}` ;
    },
    set fullName (value) {
    //method 1: catching error    
    if (typeof value !== "string")  
            //return; // messages error and exits.
            throw new Error ('Value is not a string. This message is displayed by throwing an exception'); // a new error object by constructor function. Why do you need an object?
    //         you are throwing an exception not error. I don't see the need for words 'throw' and 'exception'. 
    //    console.error('sorry, enter a proper full name'); This may scare people. Nice to just return nothing, end and exit the function
    //    and leave the object set to default values above.

    let parts = value.split(' ');   //split() will return an array called parts
    if (parts.length !== 2) throw new error ('The string should strictly have two parts'); 

    this.firstName = parts[0]; 
    this.lastName = parts[1]; // no return value. return is not mandatory for a function.
    },
    get fullName () {
        return `${this.firstName} ${this.lastName}` ;
     }
}

// The moment you throw an exception, you need to catch that exception, that is, where the original trigger command line is
// and display the error to the user. You need to wrap the command lines (code block) used as test for error within a try block.
// I suppose by throwing and catching, you can do more with it but I'm not entirely convinced.
// When error is encountered based on try in a method, you exit the method and reach the catch section. That is how control is setup. 
// How is it different from console.error and return?
 try { 
    Person.fullName = null; 
 }
catch (e) { // an object was thrown using throw new Error and it needs to be caught for a full sentence variable assignment.
    // console.log(e); // displays the error on the screen without the glaring red light but otherwise console.error can already do this
    //alert(e);
}

console.log(Person.firstName, Person.fullName); // just returns the default Annamalai Muthiah. This is another way of keeping 

//////////////////////////////////////Scope (Local v Global)
{
    let x= 1;
}

console.log(x); // x is outside the scope and is restricted to the block in which they are defined. Here the block is rep by {}
// this is true in the following code blocks: function, if-else and loops (i counter is only available within the loop - not outside
// unless you defined it outside the block)
// this is called local scope

const color1 = "red";

function colorfn(){
    const color1  = "blue";
    console.log(color1);
}

colorfn(); // local block variable takes precendence over global variable that is outside of any blocks.
// Avoid global variables as they are susceptible to change and may result in bugs when used later.

///////////////////////////////Let vs Var
// Most languages variables' scope are defined by blocks. That is how let and const in JS works to match other languages.
// var variables are scoped within functions and are accessible outside blocks. This was an anomoly compared to other languages that was solved by let and const

function printcl(){
    if (true)
    {let color4 = 'orange';
    }
    //console.log(color4);
}
printcl(); // since let is restricted to block, this command throws error

function printcl1(){
    if (true)
    {var color4 = 'orange';
    }
    console.log(color4);
}
printcl1(); // since var can be available inside a function, this command works.

// global variables defined by var attached itself to window object. window.var will get that value that can then conflict other global variables
// on the other hand, let variables don't allow such things

// Functions, objects and variables need to be present in modules to prevent attaching to global window object.

// Example to prove why it is risky and only downside to global var definition: (i) They attach to window object , (ii) are easily modified 
// by other functions. Global variable Comrade was modified to David by a function and now only the value David is available 
// to all other functions.

let comarade = 'michael';

function start1 (){
    comrade = 'David';
    console.log(comrade);
}

function stop (){
    console.log(comrade);
}

start1();
stop();

///////////////////////////////////This keyword ////////////////////////////////////////////
// if a method calls 'this', then this refers to the current object which encompasses the method
// if a function calls 'this', it would refer to the global (window, global)

let video = {
    title: 'a',
    play () {
        console.log(this); // this refers to object video.
    }
};
video.play()

video.stop = function (){
    console.log(this); // this refers to object video.
};
video.stop();

// if a general function calls this, it refers to the global object, 'window'
function playVideo() {
    console.log(this); 
};
playVideo();

// if this is used in a constructor function, this would point to the object (Video) being created by the constructor function
function Video (title){
    this.title = title;
    console.log(this); // this is still a function and can have just commands. Does not all have to be a object element or method.
}

let videoSample = new Video ('Ram');

// this within callback function will again refer to the window object because it is its own function
video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    play() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this); //you could not pass this any other way because the callback function only takes an array or index. thisarg means something 
        // that can be referred to by 'this'
    }
};

video.play();

// Three ways to overcome this hurdle into any given function whether surrounding circcumstances allows it or not
function playVideo (a,b){
    console.log(this);
}
//  Method 2: 'this' in any function would refer to the windows object unless you bind an object to it
playVideo.call({firstName:'Annamalai'}, 1, 2); // works. first argument gets passed as value of this to the function.
playVideo.apply({firstName:'Annamalai'}, [1,2]); // also works.
// the difference between call and apply is passing arguments - 
playVideoBound = playVideo.bind({firstName:'Annamalai'}); // binds an object 'permenantly' and returns a function
playVideoBound(); // will now always point to object {firstName: 'Annamalai}
// you can just call the function implicitly
playVideo.bind({firstName:'Annamalai'})();

// Applying bind method to the complex function above to pass the parent/original object to the callback function
video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    play() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this)); //you could not pass this any other way because the callback function only takes an array or index. thisarg means something 
        // that can be referred to by 'this'
    }
};

video.play();

// Starting with ES6, you can pass the parent/original object to this in a callback function using arrow function
// arrow function inherits this from the containing function.
video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    play() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }); //you could not pass this any other way because the callback function only takes an array or index. thisarg means something 
        // that can be referred to by 'this'
    }
}; 

video.play();

// Ex: Sum of arguments - variable list of numbers or an array with varying length

function sumOfNumbers(...args) { // ... as a spread operator is useless outside {} and []. So it is inside a function serves as the rest operator
    if (Array.length === 1 && Array.isArray(args[0])) // why is this important? People can't be trusted to do the right thing. 
      args = [...args[0]]; // flatten the first element
    //return args[0].reduce((sum,element) => sum+element);

    return args.reduce((sum,element) => sum+element); //if args is a nested array, reduce just returns the array within the array. Nested arrays appear in console as [array (x)]
}

array1 = [1,2,3]; 
console.log(sumOfNumbers(1,2,3,4,5,6,67,7,78,8,8));
console.log(sumOfNumbers(array1));

// Ex: area of circle 
circle4 = {
    radius : 4,
    get area (){
        return (Math.PI)*(this.radius)*(this.radius); // this.radius^2 does not work in J.S. You can do math.pi for 22/7
    }
} 
console.log(circle4.area); // if you call a method like this, it will return function definition unless it is prefixed by get when method 
// will double up as porperty. Also once it has a get prefix, its value can only be assigned if it has a setter function.
// Other values are still open to external manipulation. I hope there was a way to address that.

//Ex: error handling - functions
function countOccurence (array, number) {
    if (!Array.isArray(array)) 
       throw new Error ("Not an array")
    return array.reduce((count,element) => {
         if (element === number) count++;
         return count; 
    }, 0); // for a strange reason if count = 0 is initalized outside reduce function, it gives erroneous results.
}

try{
//array1= [2,3,5,4,4,4,4,4,3,3,3,2,2,1]
array1= null;
console.log(countOccurence(array1, 80));
}
catch (e) {
    console.log(e.message);
}