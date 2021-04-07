<h1> Ready Reference for Java Script Programming Basics Part 1 </h1>
  <h2>"Annamalai Muthiah" </h2>
    <h3>"04/06/2021" </h3>

  
    
 

### Acknowledgement 
My primary source for this "Ready Reference for Java Script Programming Basics Part 1" document is the Udemy Course titled "JavaScript - Master the Fundamentals in 6 Hours" by Mosh Hamedani. https://www.udemy.com/course/javascript-basics-for-beginners/

# Introduction
JavaScript (JS) forms the basis for so much of front-end web application development. While HTML covers the stylistic aspect and overall appearance of a web page, JS is generally used to control the behavior of the page as the customer interacts with the page. JS is currently the most popular and widely used programming languages in the world among programming, scripting and markup languages. There is a reason for this because it can do many wonderful things such as graphs, animations and many other web features. In this part- 1 document, I have highlighted the basic grammar or syntax in JS of some of the traditional programming concepts such as variable definitions, arrays and functions. The JS syntax standard is ECMAScript 6 (ES6). 

# How to execute JavaScript (JS) code? 
JS is executed by JS engine. You can either use the JS engine available in web browsers such as Chrome (V8 engine) or install node.js. Node engine was developed by inserting JS programming language into C++. Due to Node, it became possible to execute JS program outside a browser environment. The best editor for JS is Microsoft Visual Studio Code software (VS code) or IntelliJ IDEA - both of which are lightweight, cross platform and powerful editors.   

It is possible to render a HTLML program to a browser as a web page locally on a computer using a software called Live Server software. Once the web page has been rendered, one can insert java script programs into the html code and see it rendered on the webpage or the webpage console due to the browser's inbuilt JS compiler.

# Programming Concepts in JS

## 1. How to define a variable and the different types of variables?
'let' is used to label a variable while 'const' is the label for constants. JS has the following <b> primitive data types </b> - string, number, boolean, null and undefined. JS is flexible to allow dynamic typing - changing the types of variables in the course of programming. The more advanced variable types are called the <b> reference variable types </b>. 
The following are the types of reference variables in JavaScript (JS): Objects (store variables that describe the properties of an object/person/entity), arrays (stores a list of values) and functions. 


```javascript
// Variable definition
let sentence = 'Programming in JS is a lot like C++ but is certainly more complex with new ideas'; //string literal
let age = 35; //number literal
let isIntelligent = true; //boolean literal
let mysteryVariable; // type can not be defined. Therefore undefined type.

// print the message on the console (output line #1)
console.log(sentence); //Way to output the message on the node console. Similar to printing function in many other languages. If you try this command using a web browser, the output message did not appear on the web page because it appears inside the console of the webpage. You must have a node engine or an alternative to execute Java Script commands.

// reveals the data type of the variable (output line #2)
console.log(typeof(isIntelligent)) 

// see below for output
```

```
## Programming in JS is a lot like C++ but is certainly more complex with new ideas
## boolean
```

Below code fragment explains the concept of <b> Null Variables </b>


```javascript
let blankVariable = null; // undefined but blank value. It can be assigned in the future to any type.
console.log(typeof(blankVariable)) // does not come out as null. Instead comes out as object. Interesting! I suppose an empty object. 
blankVariable = 1;
console.log(typeof(blankVariable)) // If you want display the value in the console, try console.log()

// see below for output
```

```
## object
## number
```

***************************************************************************************************************
## 2. Dynamic Typing

Below code fragment explains the concept of <b> Dynamic Typing </b>


```javascript
//Dynamic typing
let age = 35;
age = 'TBD';
console.log(typeof(age)) //Age, initially a number, can now become a string. This is called dynamic typing of variables.

// see below for output
```

```
## string
```

*****************************************************************************************************************
## 3. Reference Variables

Here are few example of reference variable definitions in JS.

1. Below is an example of how an <b> object </b> is defined in JS and <b> two  </b> way of how the variables within the object are referenced.


```javascript
//Objects: indicated by the use of {}
let Person = {
    firstName : 'Annamalai', // note variable values are assigned by :
    middleName : null,
    lastName : 'Muthiah',
    Age : 35
    }

// Variables within an object can be referenced statically or dynamically.

//static reference by actual element name. 
console.log(Person.middleName) //output line #1 below

// Dynamic reference: This is particularly useful when the variable to be referenced within an object is not known before hand and is dependent on other factors such as an user's request etc. 
let var_to_be_referenced = 'firstName'
console.log(Person[var_to_be_referenced]) //output line #2 below

// see below for output
```

```
## null
## Annamalai
```

2. <b> Arrays </b> in JS are dynamic


```javascript
// ********** Arrays Part 1: Defintion ********************* 
let colorsILike = []
console.log(colorsILike) // is []. Output line #1 

colorsILike = ['Blue', 'Brown'];
//Index of an array in JS starts with 0 much like C++
console.log(colorsILike[0]) // Output line #2 

//Dynamic property of JS is indeed powerful: Array can be expanded to store more values as well as different types of values anytime. 
colorsILike[4] = 5;
console.log(colorsILike) // note JS even allows you to skip locations to store values. JS dynamically makes arrays to be as accomodative as possible without throwing up errors. Output line #3

//************ Array Part 2: properties *******************
// Arrays are objects.
console.log(typeof(colorsILike)); // proof. Output line #4

// since an Array is an object, it has properties/methods within it that can be referenced. 
console.log(colorsILike.length); //length is a property/function within the array that calculates its length
// Output line #5


// see below for output
```

```
## []
## Blue
## [ 'Blue', 'Brown', <2 empty items>, 5 ]
## object
## 5
```

3. A typical <b>Function</b> definition in JavaScript


```javascript
// A function sometimes has input parameters (e.g. firstName and lastName in the example below) 
// & output parameters (e.g. greetings in the example below)

function greet (firstName, lastName) {
    // Generating a greeting message by concatenating the words with space in between them
    greetings = 'Hello' +  ' ' + firstName + ' ' + lastName 
    return greetings; // return the greetings as the output of this function 
} 

// An example of how the function is called and executed
console.log(greet('Annamalai', 'Muthiah'))

// see below for output
```

```
## Hello Annamalai Muthiah
```

*******************************************************************************************************************
## 4. OPERATORS
Another important programming concept is that of Operators: <b> Arithmetic, Logical, Assignment, Comparison and Bitwise </b>. <b> Arithemtic Operators </b> include the basics - addition, subtraction, division, multiplication and remainder (%). Others include exponent (**), increment(++) and decrement(--). The basics are fairly straightforward. However the exponent, increment and decrement operators operate unusually which is worth discussing.


```javascript
//ARITHMETIC OPERATORS - EXPONENT (**)
let x = 10;
let y =3;
console.log(x**y)// this is equivalent to x^y,  a common expression in many programming languages.
// output should be 10^3

// see below for output
```

```
## 1000
```


```javascript
//ARITHMETIC OPERATORS - INCREMENT (++) AND DECREMENT (--) 
let x = 10;
console.log(--x) //outputs the updated value of x=x-1 = 10-1 = 9
console.log(x) // outputs the updated value of x=9
console.log(x++) // outputs the value of x=9 before updating its value to x=x+1=10
console.log(x) //outputs the updated value of x=10
console.log(++x) //outputs the updated value of x=x+1=11
console.log(x) //outputs the new value of x = 11

// see below for output
```

```
## 9
## 9
## 9
## 10
## 11
## 11
```


```javascript
//ASSIGNMENT OPERATOR (=)
// nice trick to update the value of x using a combination of arithmetic operators (+, - , *, /, %, ++, -- and **)
// and assignment operator
let x = 11;
x++; // x=x+1=12
x+=5; //x = 12+5 = 17
x%=3; //x = 17%3 = 2
x**=3; // x = 2**3=8
x/=2; // x = 8/2 =4
console.log(x) ; // outputs the value of x = 4

// see below for output
```

```
## 4
```


```javascript
//COMPARISON OPERATORS
//How to use inequality operators on how to conduct test on x value
let x = 3;
console.log(x>3)//output is false because x = 3
console.log(x>=3)//output is true because x = 3
console.log(x===3)//output is true because x =3. Note that JavaScript uses === for equality comparison
console.log(x!==5) // output is true because x is not equal to 5.

// see below for output
```

```
## false
## true
## true
## true
```


```javascript
//COMPARISON - EQUALITY OPERATORS
//JavaScript uses varying standards of equality 
//Strict equality: type and value equality (denoted by ===)
//Loose equality: compares only values but not type (denoted by ==)
console.log('001' == 1);//output is true because value on the right hand side (a number) is converted to the type of the left hand side value and then compared
console.log('001' == true); //output is true because boolean true is 1
console.log('002' == true); //output is false because boolean true is 1
console.log('0001' == true); //output is still true
console.log('0.1' == true); //output is false
console.log('001.1' == 1); //output is false 

// see below for output
```

```
## true
## true
## false
## true
## false
## false
```


```javascript
//TERNARY OPERATOR 
// if-else statement
// ternary means composed of three parts
let x=5;
// syntax of the ternary operator is: 
// test?(instructions if result of test is true):(instructions if result of test is false)
let numberType = x%2===0?'even':'odd';
console.log(numberType);

// see below for output
```

```
## odd
```
  
<b> If you feel the JavaScript console is crowded, you can clear it out using ctrl+L </b>  
  

```javascript
//LOGICAL OPERATORS 
//Logical AND(&&), OR(||) and NOT(!)
//These operate on boolean values
// Logical AND takes boolean inputs and if all of the are true, its output is true
// Logical OR takes boolean inputs and if atleast one of them is true, its output is true
// Logical ! means the opposite

technicalChallengePassed = true;
interviewPassed = false;
salarayOutsideRange = false;

console.log('Good Candidate:', (technicalChallengePassed||interviewPassed))
console.log('Strong Candidate:', (technicalChallengePassed && interviewPassed))
console.log('salaryMatch:',(!salarayOutsideRange))
console.log('To be hired?:', technicalChallengePassed && interviewPassed && !salarayOutsideRange)

// see below for output
```

```
## Good Candidate: true
## Strong Candidate: false
## salaryMatch: true
## To be hired?: false
```

When values are not always neatly Boolean (true/false), <b> Logical operators </b> can approximate non-boolean values as <b>truthy</b> or <b>falsy</b> and then conduct their logical operations.
 <b>falsy</b> values - null, undefined, false, ''(empty string), Not a Number (NaN) and 0
 <b>truthy</b> values- any value that is <b> not </b> falsy.  

If A and B are <b> both truthy values </b>, ||outputs the <i> first </i> value (A||B = A) while && outputs the <i> second </i> value (A&&B = B). See below examples for more such scenarios.


```javascript
// Between a truthy and falsy value, || outputs the truthy value and not the value "true"
defaultChoice = 'scrambled';
userChoice = '';
console.log('finalChoice is:', userChoice||defaultChoice); 

// Between a truthy and falsy value, && outputs the falsy value 
defaultChoice = 'yes';
userChoice = NaN;
console.log('Need Financial Assistance:', defaultChoice&&userChoice);

// Between two truthy values, || outputs the first truthy value
userChoice = 'sunny side';
console.log('finalChoice is:', userChoice||defaultChoice); 

// see below for output
```

```
## finalChoice is: scrambled
## Need Financial Assistance: NaN
## finalChoice is: sunny side
```

<b> Bitwise operator </b> converts numbers to their respective bit positions and conducts logical operations on each of those bits. <b> Bitwise OR </b> is represented by '|' and <b> Bitwise AND </b> is represented by '&'. Bitwise operators could be useful to assign <b> read, write and execute </b> permissions on files.


```javascript
const readPermission = 1; // gets converted to bits, 1 = 00000001 and is a constant permanent standard.
const writePermission = 2; // 2 = 00000010
const executePermission = 4; // 4 = 00000100

//If the user is to be assigned more than one privilege, it can be done by using bitwise | where each bit is processed by |
ordinaryUserPermission = readPermission
strongUserPermission = readPermission|writePermission //strongUserPermission = 3 = 00000011 
superUserPermission = readPermission|writePermission|executePermission //superUserPermission = 7 = 00000111

// In order to find out if a user has a certain permission, bitwise & is useful for extracting that information
// userPermission will be between 0 (no permission) and 7 (full permission)
userPermission = 6; //In other words 6 = 00000110
permissionTest1 = (userPermission & readPermission)?'Yes':'No'; 
console.log(permissionTest1);
permissionTest2 = (userPermission & writePermission)?'Yes':'No';
console.log(permissionTest2);
permissionTest3 = (superUserPermission & executePermission)?'Yes':'No'; 
console.log(permissionTest3);

// see below for output
```

```
## No
## Yes
## Yes
```

*******************************************************************************************************************
## 5. CONDITIONAL STATEMENTS

### Standard if-else statement. 
<b> The excellent thing about if-else syntax in JavaScript is that it does not mandate an else statement </b>


```javascript
time = 1300;

msg = 'good evening';
if (time >= 600 && time < 1200){
   msg = 'good morning';
} 
else if (time >= 1200 && time < 1800) {
  msg = 'good afternoon';
}

console.log(msg);

// see below for output
```

```
## good afternoon
```

### Switch-Case
<b> A different way to cast if-else statements </b>


```javascript
let role = 'guest'; //can be a number case or a boolean case

switch(role) {
  case 'guest':
    console.log('Guest User');
    break;
  
  case 'Moderator':
    console.log('Moderator User');
    break;
  
  case '':
    console.log('Unknown User');
    break;
    
  default:
    console.log('Admin User');
    break;
}
// see below for output

//*****************************************************//
role = true; 

switch(role) {
  case 1:
    console.log('Guest User');
    break;
  
  case 2:
    console.log('Moderator User');
    break;
  
  case '': // you can mix different value types: string, number and boolean
    console.log('Unknown User');
    break;
    
  case true:  
    console.log('I do have a role');
    break;
    
  default:
    console.log('Admin User');
    break;
}

// see below for output
```

```
## Guest User
## I do have a role
```

**************************************************************************************************************************
## 6. Loops in Java Script: for loop, while loop and do-while loop

### for-loop

```javascript
//print odd numbers from 1 to 100

let output = '';
for (let i=1; i<=100; i++) {
  if (i%2 !== 0) output = output+` ${i}`; // `` creates string literal which will be discussed later.
}

console.log(output);
```

```
##  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99
```

### while-loop

```javascript
//print odd numbers from 1 to 100

let i=1;
let output = '';
while (i<=100) {
  if (i%2 !==0) output = output+` ${i}`;
  i++;
}

console.log(output);
```

```
##  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99
```

### do-while loop
do-while is different from while loop in that the loop block is allowed to execute atleast once before the condition is tested at the end of the loop block.

```javascript

let i=101;
let output = '';

do {
if (i%2 !==0) 
  output = output +` ${i}`;   
i++;
} while (i<=100); 

console.log(output);    
```

```
##  101
```

### for-in loop  

(i) for-in loop helps to <b> cycle </b> through the elements of an <i> object </i>.

```javascript
// Defining an object called person. The values of the elements of this object are assigned by : instead of =
Person = {
firstName : 'Falcon',
lastName : 'Sparrow',
middleName: null,
Age: 12  
}

for (let index in Person){
  console.log("The value of element", index, ":", Person[index])
}
```

```
## The value of element firstName : Falcon
## The value of element lastName : Sparrow
## The value of element middleName : null
## The value of element Age : 12
```

(ii) for-in loop helps to <b> cycle </b> through element of an <i> array </i>.

```javascript
colorsILike = ['Blue', 'Red', null, null, 5]; //JS array can hold different elements of different types.
for (let index in colorsILike){
 console.log(index, ":", colorsILike[index]);
}
```

```
## 0 : Blue
## 1 : Red
## 2 : null
## 3 : null
## 4 : 5
```

### for-of loop

for-of loop does away with the indexing and directly accesses each element of the array. This does not work with an object.

```javascript
colorsILike = ['Blue', 'Red', 'Violet', 'Lilac', 'Lavander']; 
for (color of colorsILike){
  console.log(color);
}
```

```
## Blue
## Red
## Violet
## Lilac
## Lavander
```

### Concept of <i> break </i> 

break helps to <b> break out of a loop. </b>

```javascript
for (let i=0; i<=10; i++){
  if (i==5) break;
  console.log(i);
}
```

```
## 0
## 1
## 2
## 3
## 4
```

### Concept of <i> Continue </i>

Continue disrupts the flow of a loop and <b> sends the loop to the next iteration skipping any code in-between.</b>   
Usage of continue in programming is discouraged.

```javascript
let i=0;
while (i<=3){
    
if (i%2 == 0) {
  i++;
  continue;
} 
console.log(i);
i++;  
  
}
```

```
## 1
## 3
```

***********************************************************************************************************************************

## 7. Examples of functions to solve short problems 

Functions are sometimes called <b> methods </b> if contained within an object.

### 7.1.Function to determine whether a picture is landscape or not

```javascript
function isLandscape(width, height) {
return (width>height);
}

console.log("Is it a landscape picture?:", isLandscape(14.6, 8));
```

```
## Is it a landscape picture?: true
```

### 7.2. The famous "FizzBuzz" problem

The function should return:
(i) "Fizz" if the number is divisible by 5
(ii) "Buzz" if the number is divisible by 3
(iii) "FizzBuzz" if the number is divisible by both 5 and 3
(iv) the input back if not divisible by either 5 or 3
(v) return "Not a number" message if the input is not a number

```javascript
function fizzBuzz (number) {
  if (typeof(number) !== "number") return "Not a number";
  if (number%15 === 0) return "FizzBuzz";
  if (number%5 === 0) return "Fizz";
  if (number%3 === 0) return "Buzz";
  return number;
}
console.log(fizzBuzz(45));
```

```
## FizzBuzz
```

### 7.3. Driving Demerit problem

1. For speeds up to speed limit (70), the function should return message "ok".
2. For every multiples of 5 over 70, the function should return 1 demerit point. Math.floor() is a handy JS function
3. For 12 points and over, driving license is suspended. 


```javascript
speed = 135;

function speedCheck (speed) {
  
  const speedLimit = 70;
  const maxDemeritPoints = 12;
  const speedIncrementPerPoint = 5;
  
  if (typeof(speed)!== "number") return "speed is not number";
  if (speed>=speedLimit+speedIncrementPerPoint) {
    let demeritPoints = Math.floor((speed-speedLimit)/speedIncrementPerPoint);
    if (demeritPoints >= maxDemeritPoints)
      return "Your license is suspended";
      return "You have acquired "+demeritPoints+" demerit points";
  }

  return "ok";
}

console.log(speedCheck(speed));
```

```
## Your license is suspended
```

### 7.4. Function to show numbers from 0 to X (limit) and indicate if they are odd/even

```javascript
showNumbers(50);
function showNumbers (limit) {
  for (let i=1; i<=limit; i++) {
   console.log(i+ ((i%2===0)?" even":" odd")) 
  // + always works to concatenate a string. ',' works to concatenate a string only in console. 
  // While in '+', you have to leave space to concatenate strings. ',' naturally leaves space between strings being concatenated.  
  }
}
```

```
## 1 odd
## 2 even
## 3 odd
## 4 even
## 5 odd
## 6 even
## 7 odd
## 8 even
## 9 odd
## 10 even
## 11 odd
## 12 even
## 13 odd
## 14 even
## 15 odd
## 16 even
## 17 odd
## 18 even
## 19 odd
## 20 even
## 21 odd
## 22 even
## 23 odd
## 24 even
## 25 odd
## 26 even
## 27 odd
## 28 even
## 29 odd
## 30 even
## 31 odd
## 32 even
## 33 odd
## 34 even
## 35 odd
## 36 even
## 37 odd
## 38 even
## 39 odd
## 40 even
## 41 odd
## 42 even
## 43 odd
## 44 even
## 45 odd
## 46 even
## 47 odd
## 48 even
## 49 odd
## 50 even
```

### 7.5 Function to count the number of truthy values in an array
<b>Falsy</b> values are 0, NaN, false, '', undefined and null. 
<b>Truthy</b> is everything else.
Truthiness or falsiness of a value can be extracted if tested as a condition using a if-statement or operated on by logical operators. 

```javascript
const array = [5, null, 3, 4, NaN, ''];

function truthyEstimate(array){
  let truthyCount = 0;
  for (value of array) { //refer to for-of section from above
   if (value) truthyCount++;
  }
  return truthyCount;
}

console.log("The number of truthy values in the given array:", truthyEstimate(array));
```

```
## The number of truthy values in the given array: 3
```

### 7.6 Function to display properties of an object that are string 

```javascript
const Movie = {
Name: 'CasaBlanca',
Year: 'Really old like 1930s',
Composer: 'A really good musician',  
Rating: 5,
Actors: 40
}; // note object definition ends with ; while function definition does not

function stringProperties(object){
for (let index in object) {
    if (typeof(object[index]) == "string") 
         console.log(index+": "+object[index]); //if you only have a single statement under a for loop, or if statement, you don't need braces.
}
}

stringProperties(Movie);
```

```
## Name: CasaBlanca
## Year: Really old like 1930s
## Composer: A really good musician
```

### 7.7 Function to display sum of multiples of 3 and 5 within a limit 

```javascript
let limit = 20;
function sumMultiplesof3and5(limit){
  let sum=0;
  for (let i=1; i<=limit; i++) { 
    if ((i%3==0)||(i%5==0)) 
      sum+=i;
  }
  return sum;
}

console.log("The sum of multiples of 3 and 5 within", limit, "is:", sumMultiplesof3and5(limit));
```

```
## The sum of multiples of 3 and 5 within 20 is: 98
```

### 7.8 Function to estimate grade of a student
Note that the if statements below takes advantage of the range of values to shorten programming keystrokes.

```javascript
const marks = [70, 80, 90];
console.log("The student's grade:", studentGrade(marks));

function studentGrade(marks){
  let average = averageMarks(marks);
  if (average<60) return 'F';
  if (average<70) return 'D';
  if (average<80) return 'C';
  if (average<90) return 'B';
  return 'A';
}

function averageMarks(marks){
  let sum=0;
  for (let value of marks)
    sum+=value;
  return sum/(marks.length)  
}
```

```
## The student's grade: B
```

### 7.9 Function to display stars/asterisks in increasing numbers in each row till it reaches the set number of rows 
Note how the "+" symbol is used to stitch together the desired string

```javascript
showStars(12);

function showStars(numberOfRows){
  for (let i=1; i<=numberOfRows; i++)
    console.log(stringToBePrinted(i));
}

function stringToBePrinted(noOfStars){
  let starString = '';
  for (let j=1; j<=noOfStars; j++)
    starString+='*';
  return starString;  
}
```

```
## *
## **
## ***
## ****
## *****
## ******
## *******
## ********
## *********
## **********
## ***********
## ************
```

### 7.10 Function to display prime numbers

```javascript
let limit = 32;
let output = '';
console.log(listPrimeNumbers(limit))

function listPrimeNumbers(limit){
   for (let i=2; i<=limit; i++) // 1 is neither prime or composite
     if (noOfDivisors(i)==2) // this is a prime number test because prime number is divisible by 1 and itself. Therefore, no of divisors = 2
         output+=` ${i}`;
         
   return output;
}

function noOfDivisors(number){
  count = 0;
  for (i=1; i<=number; i++)
    if (number%i == 0) 
      count++;
  
  return count;
}
       
```

```
##  2 3 5 7 11 13 17 19 23 29 31
```
***********************************************************************************************************************************

## 8. Objects

### 8.1 Short note about objects in Java Script
1. Objects are collection of <b> key-value pairs </b>.
2. The keys of the objects are also called <b> properties </b> and the collection of properties in an object are expected to be related. 
3. The properties can be expected to describe an entity or be directed towards a purpose.
4. An object, besides properties, can also contain other objects, methods/functions or arrays within itself. They are accessed using   
the name of the object and the "." symbol. This manner of organizing programming entities inside an object is called <b> Object Oriented Programming </b>.
5. There is no formal definition of a <b> class </b> in Javascript but instead <b> factory functions and constructor functions </b> (see sections 8.2 and 8.3 below) that generate objects.
6. Objects in JavaScript are dynamic because you can always add properties and methods to them after they have been created.

Regarding points 2 and 3, here is an example of an object 

```javascript
//Scenario: App to draw shapes
//Objects can represent the properties of different shapes
//Example, a circle object will contain properties such as radius and x and y coordinates of its center.

let circle = {
  radius: 1,
  location: { // another object and = has been replaced with :
    x:0,
    y:0
  },
  isRequired: true,
  draw: function(){ //no argument to the function/method
    console.log('draw a beautiful circle');
    return;
  },
  author: ['Annamalai', null, 'Muthiah'] //indexing begins at 0
};

// Properties, arrays and methods inside an object are accessed using "." 
circle.draw(); 
console.log(circle.author[2]); //printing author's last nmae
// See below for output 
```

```
## draw a beautiful circle
## Muthiah
```

### 8.2 Factory Function for objects

Factory function, as the name suggests, is like a factory for generating objects. 

```javascript
function createCircleObject(radius, location){
return {
radius: radius,
location: location,
draw: function () { //note the syntax of method (or function) definition inside an object.
console.log('I am drawing circle of radius:', radius);  
}  
};
}

let circle1 = createCircleObject(5, "origin");
circle1.draw();
```

```
## I am drawing circle of radius: 5
```

The syntax for the above <b> factory function </b> createCircleObject can be <b> simplified </b> in JavaScript.

```javascript
function createCircleObject(radius, location){
return {
radius, //when key-value pair are the same labels inside an object, it can be simplified to just one label name.
location,
draw () { //note the function syntax has also been shortened inside an object
console.log('I am drawing circle of radius:', radius);  
}  
};
}

let circle1 = createCircleObject(5, "origin");
circle1.draw();
```

```
## I am drawing circle of radius: 5
```

### 8.3 Constructor Function for objects
The job of a <b> constructor function is to create objects like the factory function </b>. 
It has a few interesting properties:  
(i)Constructor function uses <b> PASCAL </b> notation, that is first letter of every word is capitalized, as opposed to CAMEL notation.  
CAMEL notation: first letter of every word save the first word is capitalized. CAMEL notation is used everywhere else in JavaScript for naming variables.
(ii)Constructor function is called in the programs with <b> the word "new" in front of it </b> that denoted the function is a constructor function because you are creating a new object based on that function.  
(iii) The properties and other items of the object are initialized inside the constructor function and the object is not returned by the function because there is no need for it.  

Here is an example code to create the same circle object that was created by the above factory function using constructor function.

```javascript
function CircleObject(radius){ //note pascal notation for the function name
  this.radius = radius; //`this` refers to the empty object. this refers to the object executing the piece of program. 
  this.draw = function (){
    console.log('draw');
  }
}

let circle1 = new CircleObject(2); //new creates an empty object, executes the function and returns the object to the same spot. 
//new does all the job that you would have executed using let x={}, calling the function and returning the object.
circle1.draw();
console.log(circle1.radius);
```

```
## draw
## 2
```

### 8.4 Other useful properties of JavaScript objects

The <b>dynamic nature of JS objects</b> is that you can add new methods and properties outside the original object definition.

```javascript
function CircleObject(radius){ 
  this.radius = radius; 
  this.draw = function (){
    console.log('draw');
  }
}

let circle1 = new CircleObject(2);
circle1.color = 'Yellow';
circle1.proverb = function (){
  console.log("There is no way to square a circle!");
}
console.log(circle1); // to see what the object turned out to be

// you can also delete properties
delete circle1.color;
console.log(circle1);
console.log(circle1.constructor)
```

```
## CircleObject {
##   radius: 2,
##   draw: [Function],
##   color: 'Yellow',
##   proverb: [Function] }
## CircleObject { radius: 2, draw: [Function], proverb: [Function] }
## [Function: CircleObject]
```

<b> constructor </b> is an inbuilt property of a JS object that stores the name of the function that constructed the object.


```javascript
// factory function
function createCircleObject(radius, location){
return {
radius, //when key-value pair are the same labels inside an object, it can be simplified to just one label name.
location,
draw () { //note the function syntax has also been shortened inside an object
console.log('I am drawing circle of radius:', radius);  
}  
};
}

//constructor function
function CircleObject(radius){ 
  this.radius = radius; 
  this.draw = function (){
    console.log('draw');
  }
}


let circle1 = createCircleObject(5, "origin");
let circle2 = new CircleObject(2);

// constructor property
console.log(circle1.constructor);//circle1 was created using built-in JavaScript method of object definition,that is, 
//using {} (object literal definition). Objects created using {} use the built-in constructor function 'Object()'.
//when using let x={}, what happens under the hood is let x = new Object ().
// Other constructor functions in JS: new String(), new Number(), new Boolean(). Notice the caps keeping up with the Pascal notation.
console.log(circle2.constructor);// shows the CircleObject function that was used as constructor function to construct the object.

string = 'test';
console.log(string.constructor);
console.log(typeof(string)); // Though it is a string, the presence of constructor shows every data type in JavaScript is an object in some way.
```

```
## [Function: Object]
## [Function: CircleObject]
## [Function: String]
## string
```

<b> delete </b> does not work outside an object.

```javascript
let x =5;
console.log(x);
delete x; 
console.log(x);
```

```
## 5
## 5
```

***********************************************************************************************************************************

## 9.Object like properties of functions


```javascript
// factory function
function createCircleObject(radius, location){
return {
radius, //when key-value pair are the same labels inside an object, it can be simplified to just one label name.
location,
draw () { //note the function syntax has also been shortened inside an object
console.log('I am drawing circle of radius:', radius);  
}  
};
}
console.log(createCircleObject.constructor);//created by a specific type of constructor function
console.log(typeof(createCircleObject)); // data type is a function


//constructor function
function CircleObject(radius){ 
  this.radius = radius; 
  this.draw = function (){
    console.log('draw');
  }
}
let circle1 = new CircleObject(2);
circle1.draw();

console.log(CircleObject.constructor);
console.log(typeof(CircleObject));

// other object properties of function
console.log(createCircleObject.name);// Name of the function
console.log(createCircleObject.length);//Number of arguments
```

```
## [Function: Function]
## function
## draw
## [Function: Function]
## function
## createCircleObject
## 2
```

A function object has many interesting properties such as 
1. call, bind, apply, toString() and 
2. above discussed properties of name, length and constructor
3. and other properties such as argument, caller, prototype etc.

Here is an example of constructing a function as an object using the native JS constructor function (Function()) instead of using  
the usual function literals and then using it to construct an object.

```javascript
const createCircleObjectNative = new Function ('radius', 'location', `
                                             this.radius = radius;
                                             this.location = location;
                                             this.draw = function (){
                                               console.log('draw a circle');
                                             };`); //first set of arguments for Function is the arguments and the second set   
                                                   //is the body of the function included within the template literal operator ``.  
let circle1= new createCircleObjectNative(3, "center"); 
// the "new" operator invokes "createCircleObjectNative" in this way: createCircleObjectNative.call({},3,"center").
// "this" inside the constructor function will refer to {}. That's the protocol inside the JavaScript with the "new" operator
// Another way "new" could work is to use the method "apply". createCircleObjectNative.apply({}, array). apply requires array as the function arguments.

console.log(circle1.location);
```

```
## center
```

***********************************************************************************************************************************

## 10. Reference variable types and their properties

Primitive variables types are Boolean, String, Numbers, Null, undefined and symbol
<b> Primitive variable is copied by value </b> and once the value is copied, a new location in memory is assigned to the copy and <b> the original and copy do not share the same memory location </b>. For example, when x=y (x and y are primitive variable types), value of x (not its location) is copied over to location of variable y. 

```javascript
x=10;
y=x;
x=20;
console.log(x);
console.log(y); // x and y values are different because the values are stored in different memory locations.
```

```
## 20
## 10
```

If x and y are reference variables (objects, arrays and functions), they only store the address of the memory location of the value in memory and not the value itself. Therefore, when reference type variables are copied, the references(addresses) get copied and not the values represented by those references.  

```javascript
//arrays as an example of reference type variable
x=[10,20];
y=x;
x[0]=11;
console.log(y); 
// though only array X was altered, Y was altered too because they share the same memory location since arrays are reference type variables
console.log(typeof(x));//interstingly JS thinks of reference data types like arrays as objects

//Objects as an example of reference type variable
x={value:10};
y=x;
x['value']=20;
console.log(x['value']);
console.log(y['value']); // though only object x was changed, y changed too.

// see below for all the above outputs
```

```
## [ 11, 20 ]
## object
## 20
## 20
```

Function inputs are copied by the function before being take into the function and the values inside the function are   
inside the scope of the function unless they are returned. 

```javascript
number = 20;
function increase(number){
  ++number;
}
increase(number);
console.log(number);// no change in value of number because the increase took place inside a function

//if instead the number was passed as an object, it would be referenced and hence will reflect the increase
number = {value:20};
function increase(object){
  ++object.value;
}
increase(number);
console.log(number.value);// 
```

```
## 20
## 21
```

### 10.1 How to cycle through properties and methods of an object?

```javascript
let circle1 = {
  radius: 4,
  location: "upper right",
  color: 'yellow',
  draw () {
    console.log('A circle is an example of symmetry');
  }
};

console.log(""); //just for an extra line in the output
console.log( "******************** output of for-in when used in the context of objects*********************")
// Way to output the name of the property/method and the respective value using for-in
for (let index in circle1) {
  console.log(index,":",circle1[index]);
}

// Alternative way to cycle through an object
//for-of works on iteratable item like an array. For an object, it needs to be adapted by using Object.keys and Object.entries
console.log(""); //just for an extra line in the output
console.log( "******************** output of for-of and object.keys*********************")
for (index of Object.keys(circle1)) {
  console.log(index);
}

console.log(""); //just for an extra line in the output
console.log( "******************** output of for-of and object.entries*********************")
for (index of Object.entries(circle1)){
  console.log(index);
}

console.log(""); //just for an extra line in the output
console.log("******************** shortcut to use in to check for a property in an object*********************");
('draw' in  circle1)?console.log('true'):console.log('false');
```

```
## 
## ******************** output of for-in when used in the context of objects*********************
## radius : 4
## location : upper right
## color : yellow
## draw : draw () {
##     console.log('A circle is an example of symmetry');
##   }
## 
## ******************** output of for-of and object.keys*********************
## radius
## location
## color
## draw
## 
## ******************** output of for-of and object.entries*********************
## [ 'radius', 4 ]
## [ 'location', 'upper right' ]
## [ 'color', 'yellow' ]
## [ 'draw', [Function: draw] ]
## 
## ******************** shortcut to use in to check for a property in an object*********************
## true
```

### 10.2 Cloning an object
If you can't create an independent copy of a reference variable like an object by the normal method, you can clone it.

```javascript
let circle1 = {
  radius: 4,
  location: "upper right",
  color: 'yellow',
  draw () {
    console.log('A circle is an example of symmetry');
  }
};

let copy = {};
for (key in circle1)
copy[key] = circle1[key];   
copy.draw();

console.log("\n", "************************Object produced by alternate method of cloning (Method 1: Assign) **********");
copy1 = Object.assign({company:"FInformatics"}, copy); //note how you can combine more than one object using assign.
copy2= copy; //usual way to create a copy of a variable. 
console.log(copy1['color']);
console.log(copy2['color']);
copy2['color'] = "red";
console.log(copy['color']);
console.log(copy1['color']);
console.log(copy2['color']);

console.log("\n", "****************Object produced by alternate method of cloning (Method 2: Spread operator) **********");
another = { ... copy};
yetAnother = copy;
yetAnother['color'] = "green";
console.log(copy['color']);
console.log(another['color']);
console.log(yetAnother['color']);
```

```
## A circle is an example of symmetry
## 
##  ************************Object produced by alternate method of cloning (Method 1: Assign) **********
## yellow
## yellow
## red
## yellow
## red
## 
##  ****************Object produced by alternate method of cloning (Method 2: Spread operator) **********
## green
## red
## green
```
***********************************************************************************************************************************

## 11.GARBAGE COLLECTION and BUILT-in OBJECTS in JavaScript
<b> GARBAGE COLLECTION </b> is an excellent feature of JavaScript, wherein a program runs in the background and deallocates memory from variables that are no longer being used.

There are a few built-in objects in JS that are very handy namely the <b> Math Object </b>.Here are some useful examples.

```javascript
console.log(Math.PI); // returns the value of pi=22/7
console.log(Math.abs(-5)); //returns the absolute value
console.log(Math.random()); //returns a random value between 0 and 1
console.log(Math.round(10.8)); //returns rounded up number
console.log(Math.max(1,2,3), Math.min(-8,-13, 45)); //returns maximum and minimum values
```

```
## 3.141592653589793
## 5
## 0.07742151413977916
## 11
## 3 -13
```
***********************************************************************************************************************************

## 12. String Objects

When you do a string literal definition for a string variable (let x = ''), you expect the variable to be a primitive variable. However, <b> JavaScript wraps the primitive variable like an object </b> with methods and properties as if it has been defined using a constructor function. The string object now will have many of the methods and properties available. 

```javascript
//String literal definition
let message = '        This is a test message'; // a long white space has been included to precede the message
console.log(typeof(message)); //answer is string

//String object definition
let message1 = new String ('String defined using a constructor function');
console.log(typeof(message1)); //answer is object because it was defined using the constructor function

// how to generate new line in JS output 
console.log ("a", "\n", "b"); // "\n" introduces a new line. Works only if all of them are strings.  
console.log("This is a very long string which needs \nto wrap across multiple lines because \notherwise my message is unreadable."); 
//otherwise use "+" with "\n" to realize a new line
// Don't add too many "" inside the console.log string. There should not be more than "" in the console log string. If you wish to add  
// special characters without confusing the program, you can always do so with help of "\" (escape notation).
```

```
## string
## object
## a 
##  b
## This is a very long string which needs 
## to wrap across multiple lines because 
## otherwise my message is unreadable.
```

The various methods and properties of java script string object can be googled using "javascript string" and a good source is usually the site, developer.mozilla.org.

```javascript
let message = '        This is a test message';

//String properties
console.log(message.length); // length of a string in terms of characters. This property could be useful to count  
//characters of a string to ensure that the user does not exceed or under write his response by meauring the length //of the string.
console.log(message[10]);//accessing individual characters of a string. First character index is 0. 

//String methods
console.log("original string:", message + "\n" +
          "checking if string = test is present:", message.includes("test") + "\n" + //testing if a certain string is included
          "checking if the starting string = this:", message.startsWith("this") + "\n" +//testing the starting string 
          "checking if the starting string = This:", message.startsWith("This") + "\n"+ // since testing is case sensitive
          "checking if the starting string = whitespace:", message.startsWith(" ") + "\n"+ //testing if the starting string is white space. In java script, white space is represented by " ".
          "checking if the ending string = message:", message.endsWith("message") + "\n" +  //testing the ending string
          "checking the location of the string = this:", message.indexOf("this") +"\n" + //-1 indicates absence
          "checking the location of the string = This:", message.indexOf("This") + "\n"+
          "checking the location of the string = blank:", message.indexOf(" ")+ "\n"+ //of all the locations blank is present, it gives the first location
          "Replaced message:", message.replace('message', 'announcement')+ "\n"+ //replaces and outputs the string. Does not update the source string with the replacement  
          "Outputting the upper case version of the string:", message.toUpperCase() + "\n" + 
          "String after white space trimming on either side of the string:", message.trim() + "\n" + // Trims the white space of a string 
          "String after white space trimming on left side of the string:", message.trimRight() + "\n" + // Trims the white space on the right side of the string
          "String after white space trimming on left side of the string:", message.trimLeft() + "\n" +
          "String after spitting on a certain pattern:", message.split("a") //splits the string on "a" and returns an array of fragments and not a list like R 
          );

```

```
## 30
## i
## original string:         This is a test message
## checking if string = test is present: true
## checking if the starting string = this: false
## checking if the starting string = This: false
## checking if the starting string = whitespace: true
## checking if the ending string = message: true
## checking the location of the string = this: -1
## checking the location of the string = This: 8
## checking the location of the string = blank: 0
## Replaced message:         This is a test announcement
## Outputting the upper case version of the string:         THIS IS A TEST MESSAGE
## String after white space trimming on either side of the string: This is a test message
## String after white space trimming on left side of the string:         This is a test message
## String after white space trimming on left side of the string: This is a test message
## String after spitting on a certain pattern: [ '        This is ', ' test mess', 'ge' ]
```
***********************************************************************************************************************************
## 13. Template literal
<b> Template literals are a stronger alternative to String literals </b> because you can control string formatting.  
They are indicated by ``.


```javascript
// String formatting without using template literals
console.log("**********************String Formatting without template literals********************");
let newMessage =
'This is my\n'+
'\'first\'message';
console.log(newMessage);

// The same string is cast so much more easily using template literals without needing the escape character '\'
// Just type what you want like an email and it will appear in the exactly same style
console.log("\n**********************String Formatting with template literals ********************");
let anotherMessage = 
`This is my 'new'
and modified message`;
console.log(anotherMessage);

console.log("\n**********************String Formatting with template literals and placeholders*****");
//Expressions/constants/variables/function calls within template literals are achieved by using ${} as placeholders
let Name = 'Annamalai';
let message = 
`${(Name=='Annamalai')?22901:US}

Hi ${Name},
                  
Good Job!
                  
FlexibleInformatics Team`

console.log(message);            
```

```
## **********************String Formatting without template literals********************
## This is my
## 'first'message
## 
## **********************String Formatting with template literals ********************
## This is my 'new'
## and modified message
## 
## **********************String Formatting with template literals and placeholders*****
## 22901
## 
## Hi Annamalai,
##                   
## Good Job!
##                   
## FlexibleInformatics Team
```
***********************************************************************************************************************************
## 14. Date objects
Date objects are generated by <b> Date constructor function </b>.

```javascript
console.log("*********************Basic Date Object************************");
let now = new Date(); //stores present date in the format yyyy-mm-ddT...Z 
console.log(now); //seems to store time +5:00 

console.log("\n*********************Date Objects with inputs************************");
let date1 = new Date ('27/02/2022'); //Invalid date format. Input to the date constructor always has to be mm-dd-yyyy format
console.log(date1);

let date2 = new Date ('02-27-2022'); 
console.log(date2);

let date3 = new Date ('02-27-2022 10:00 am');
console.log(date3);
console.log(typeof(date3));

let date4 = new Date (2022, 02, 27, 22); //really useless input strategy because everything date and time element gets advanced
console.log(date4);
console.log(typeof(date4));

console.log("\n *******************Date object manipulation using the built-in methods inside the object ********************************");

//get method
console.log(now.getMonth()); // gives month=number-1 since month count begins at 0

//set method
now.setFullYear(2018); //sets and updates the object
console.log(now);

//Date type conversion
console.log(now.toDateString()); //Day, Month, Date and Year string. Does not update anything

//Getting time from date
console.log(now.toTimeString());// only time and time zone (EST and not GMT as in the date object)

//Backend communication
console.log(now.toISOString());
console.log(now.toJSON());

//None of the above formatting dealt with custom date conversion- disappointing!
// like date.get('yyyy/MM/dd')- does not work
```

```
## *********************Basic Date Object************************
## 2021-04-07T12:45:55.692Z
## 
## *********************Date Objects with inputs************************
## Invalid Date
## 2022-02-27T05:00:00.000Z
## 2022-02-27T15:00:00.000Z
## object
## 2022-03-28T02:00:00.000Z
## object
## 
##  *******************Date object manipulation using the built-in methods inside the object ********************************
## 3
## 2018-04-07T12:45:55.692Z
## Sat Apr 07 2018
## 08:45:55 GMT-0400 (Eastern Daylight Time)
## 2018-04-07T12:45:55.692Z
## 2018-04-07T12:45:55.692Z
```

*************************************************************************************************************************************
## 15. Factory and Constructor functions


```javascript
// Creating an object with street, city and zip code elements and create a function called showAddress()
// to display the values of the object

let address = {
  Street: 'Desire',
  City: 'New York City',
  zipCode: 22901
};

function showAddress(object) {
for (let element in object)
    console.log(element, ":", object[element]);
}

showAddress(address);
//console.log(address['Street'], address.Street);
```

```
## Street : Desire
## City : New York City
## zipCode : 22901
```

<b> Constructor functions and factory functions </b> are two ways to <b> initialize an object </b>.
The same object above, address, is initialized in two ways shown below.


```javascript
//factory function
function addressObjectGenerator(street, City, zipCode){
  return {
    street,
    City,
    zipCode
  };
}

//constructor function
function AddressObjectConstructor (Street, City, zipCode) {
  this.Street = Street;
  this.City = City;
  this.zipCode = zipCode
}

let address1 = addressObjectGenerator("LeParc", "Charlottesville", 22901);
console.log(address1);

let address2 = new AddressObjectConstructor ("LeParc", "Charlottesville", 22901);
console.log(address2.Street);
```

```
## { street: 'LeParc', City: 'Charlottesville', zipCode: 22901 }
## LeParc
```

<b> Object Equality </b> 
Remember equality === symbol only checks for reference equality in the case of reference data types. 

```javascript
//constructor function
function AddressObjectConstructor (Street, City, zipCode) {
  this.Street = Street;
  this.City = City;
  this.zipCode = zipCode
}

let address1 = new AddressObjectConstructor ('a', 'b', 'c');
let address2 = new AddressObjectConstructor ('a', 'b', 'c');
let address3 = address2;
address2.Street = 'a1';
// reference variable concept
console.log(address3.Street);

//checking object equality
function areEqual(address1, address2){
  return (address1.Street === address2.Street && address1.City === address2.City && address1.zipCode === address2.zipCode)?true:false;
}
console.log("*******************************Objects are equal or not? *****************")
console.log(areEqual(address2, address3));

//checking if objects are referencing the same object
function areSame(address1, address2){
  return (address1 === address2)?true:false;
}
console.log("*******************************Objects are same or not? *****************")
console.log(areSame(address1, address2));
console.log(areSame(address2, address3));
```

```
## a1
## *******************************Objects are equal or not? *****************
## true
## *******************************Objects are same or not? *****************
## false
## true
```

<b> Blog Post </b> is an example of an object from real life.

```javascript
let blogPost = {
  Title: 'Tip# 1 about JavaScript',
  Body: 'JavaScript has a lot of similarity to C++',
  Author:'Annamalai Muthiah',
  Date: '03-21-2021',
  Views: 12,
  Comments: [
    {Comment:'Thanks for the blog', Author:'Vetri Muthiah'},
    {Comment:'This is an Amazing blog', Author:null}
    ],
  isLive: true
}

// What should a blogging engine constructor function look like? 
// Something that generates draft blog posts (something not published yet)
function BloggingEngine (title, body, author, date) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.date = date;
  this.isLive = false;
  this.views = 0;//this value can be incremented with each view
  this.comments = [];// values can be added later
}

let blogTitle = 'A new blog engine';
let blogBody = 'I am creating my first draft article using the blogging engine';
let blogAuthor = 'Annamalai Muthiah';
let date = '03-22-2021';
let BlogDraft1  = new BloggingEngine (blogTitle, blogBody, blogAuthor, date);
console.log(BlogDraft1.body);
console.log(BlogDraft1);
```

```
## I am creating my first draft article using the blogging engine
## BloggingEngine {
##   title: 'A new blog engine',
##   body:
##    'I am creating my first draft article using the blogging engine',
##   author: 'Annamalai Muthiah',
##   date: '03-22-2021',
##   isLive: false,
##   views: 0,
##   comments: [] }
```

<b> Array of Objects </b>
The price range objects cover 3 price ranges - low, mid and high price ranges.

```javascript
// The concept is to group similar attributes as an object and store such objects in an array
let priceRange =[
 {label: "$", toolTip: "inexpensive", minPrice:0, maxPrice:10},
 {label: "$$", toolTip: "moderate", minPrice:11, maxPrice:20},
 {label: "$$$", toolTip: "expensive", minPrice:21, maxPrice:30}
];

//the restuarants can now be matched with the price range object
let restaurants = [
  {averagePrice:10}
];
```
**************************************************************************************************************************************
## 16. Array operations
<b> Arrays are objects </b> and hence have built-in functions for various data operation needs.

### 16.1 Array manipulation functions
<b> It is best not to print the manipulated array in the same step.</b> 
Allow each array update to happen separately and print the array in the next step.
Don't also try to string multiple array update operations in the same step.  

```javascript
let numbers =[1, 2, 3];

console.log("*********************************************Push****************************");
//Push - adds values to the end of an array
numbers.push(4,5,6,7,8,9,10);
console.log(numbers);

console.log("\n********************************************Unshift***********************");
//Unshift - adds values to the beginning of an array
numbers.unshift(-2, -1, 0);
console.log(numbers);

console.log("\n*********************************************Delete***********************");
//Delete 
numbers.splice(2,3);//splice(starting position (right before starting position), no of elements to be deleted, elements to be inserted). 
//This case elements to be inserted=0
console.log(numbers);

console.log("\n*********************************************Insert***********************");
//Insert 
numbers.splice(2, 0, 3, 4, 5); // no of elements to be deleted =0
console.log(numbers);

console.log("\n*********************************************Remove in the end************");
//Remove elements in the end
numbers.pop();
console.log(numbers);
//Alternative way to write out the same thing
//let x = numbers.pop(); x will store the number that was popped

console.log("\n*********************************************Remove in the beginning*************");
numbers.shift();
console.log(numbers);
```

```
## *********************************************Push****************************
## [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
## 
## ********************************************Unshift***********************
## [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
## 
## *********************************************Delete***********************
## [ -2, -1, 3, 4, 5, 6, 7, 8, 9, 10 ]
## 
## *********************************************Insert***********************
## [ -2, -1, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10 ]
## 
## *********************************************Remove in the end************
## [ -2, -1, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9 ]
## 
## *********************************************Remove in the beginning*************
## [ -1, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9 ]
```

### 16.2 Array search functions  
Type 1: Searching for primitive type data elements in an array. 

```javascript
let numbers = [1, 2, 1, 3, 4, 1];

//indexof elements
console.log(numbers.indexOf(3)); //position in an array starts at 0
console.log(numbers.indexOf(1)); //If there are multiple hits, search would return the location of the first instance
console.log(numbers.indexOf('a')); // If there are no hits, search would return -1
console.log(numbers.indexOf(1,starts = 1)); // Second position tells where to start search from
console.log(numbers.lastIndexOf(1)); // returns the last position of where the value is located

//presence or absence of an element
console.log(numbers.includes(4));
console.log(numbers.indexOf(3) !== -1)

```

```
## 3
## 0
## -1
## 2
## 5
## true
## true
```

Type 2: Searching for reference type data elements in an array -not easy

```javascript
let courses = [
  {id:1, name:'a'},
  {id:2, name:'b'}
];
console.log(courses.includes({id:1, name:'a'}))//false because reference values are not same
console.log(courses.indexOf({id:1, name:'a'})) // -1 because reference values are not same 

test = courses[1];
console.log(courses.includes(test)); // true because reference values are the same
```

```
## false
## -1
## true
```

### 16.3 Array find function
find function <b> stops after the first element </b> in the array that meets the search criterion.
If there are no elements that return true, find returns "undefined" (and not -1 as indexOf does).
The function that is passed as an argument to a function (in this case, the find function) is called <b> Callback function </b>.  

```javascript

console.log("***************************Find Function for an array of numbers ************************************")
//using find on an array of primitive data types
let ab= [12, 13, 44, 67, 87];
let result = ab.find(function(element) {
    return (element > 20);
} 
);
console.log(result);


console.log("\n***************************Find Function for an array of objects ************************************")
//using find on an array of objects to search and output the matching object
let courses = [
  {id:1, name:'a'},
  {id:2, name:'b'},
  {id:3, name:'a'}
];

let result1 = courses.find(function(x) // you can use an alternative names for x 
{return (x.name === "c") 
}
);
console.log(result1);

// returns the index of the FIRST object element that matches (if there is no index that matches, returns -1)
let result2 = courses.findIndex(function (x)
{ return (x.name === "a");
}  
);
console.log(result2);


console.log("\n***************************Arrow Function ***************************************************************")
//Arrow functions (function arguments are separated from the function body using the arrow function and it helps to syntatically reduce a function within a function)
console.log(courses.find(x => { //if no argument, just put down ()
  return x.name === "a";
}))
//further simplified 
//you can eliminate ';', return and {} if there is only line of code that is returning something
console.log(courses.find(x => x.name === "a"));
console.log(courses.findIndex(x => x.name === "b")); // returns 1, the index value.
```

```
## ***************************Find Function for an array of numbers ************************************
## 44
## 
## ***************************Find Function for an array of objects ************************************
## undefined
## 0
## 
## ***************************Arrow Function ***************************************************************
## { id: 1, name: 'a' }
## { id: 1, name: 'a' }
## 1
```

### 16.4 Emptying an Array
There are at least 4 different ways to empty an array

```javascript
console.log("***********************Solution # 1 *******************************")
//solution #1 - by assigning an empty array
let array1 = ['a', 'b', 'c'];
let array2= array1; // both arrays have the same reference
array1= []; // array1 has been emptied. array1 and array2 no longer have the same reference
console.log(array1);
console.log(array2);

console.log("\n***********************Solution # 2 *******************************")
//solution #2 - by truncating the length of an array (unique feature of java script)
array1 = ['a', 'b', 'c'];
array2= array1;//assigned the same reference
array1.length=0;//empties the array
console.log(array1);
console.log(array2);

console.log("\n***********************Solution # 3 *******************************")
//solution #3 - splice method (see 16.1 for splicing instructions)
array1 = ['a', 'b', 'c'];
array2=array1;
array1.splice(0,array1.length); //syntax: splice(position in array, number of elements to be deleted)
console.log(array2); //because array 1 and 2 share same reference

console.log("\n***********************Solution # 4 *******************************")
//solution #4 - pop method (see 16.1 for popping instructions)
array1 = ['a', 'b', 'c'];
array2= array1;
while (array1.length>0)
  array1.pop();//performance cost becomes significant as the number of function calls increases dramatically with a large array
console.log(array2);
```

```
## ***********************Solution # 1 *******************************
## []
## [ 'a', 'b', 'c' ]
## 
## ***********************Solution # 2 *******************************
## []
## []
## 
## ***********************Solution # 3 *******************************
## []
## 
## ***********************Solution # 4 *******************************
## []
```
<b> solution #2 (setting array length = 0) is the best for emptying an array </b> because solution # 3 (using splice method) is not as compact as solution # 2.

### 16.5 Combining (concatenation) arrays and slicing of an array

```javascript
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);
console.log(combined);

let slice1 = combined.slice(start=3, end=5); //starts right before the start position and ends before the end position
console.log(slice1);
//alternative way to express
let slice2 = combined.slice(start=3); //no end. The slice function probably has default values  
console.log(slice2);
//Another way to copy an array
let slice3 = combined.slice(); // slicing the whole thing = copying the whole array
console.log(slice3);
```

```
## [ 1, 2, 3, 4, 5, 6 ]
## [ 4, 5 ]
## [ 4, 5, 6 ]
## [ 1, 2, 3, 4, 5, 6 ]
```

### Strong reminder about the "Object Oriented" nature of programming in Javascript
If all the above array data operations (slicing and concatenation) were to happen on an array of objects, the object references  
gets copied and passed on and not the actual values.

```javascript
let courses = [
  {id:1, name:'a'},
  {id:2, name:'b'},
  {id:3, name:'a'},
  {id:4, name:'c'},
  {id:5, name:'aa'}
];

let courseSubset = courses.slice(start=2);
courseSubset[0].name = "English"
console.log(courses); // though the change was made in the sliced version of array, the change gets reflected on the original array too because they share references to the same location in the memory.
```

```
## [ { id: 1, name: 'a' },
##   { id: 2, name: 'b' },
##   { id: 3, name: 'English' },
##   { id: 4, name: 'c' },
##   { id: 5, name: 'aa' } ]
```

### 16.6 Spread operator (...) for an array
<b> Spread operator helps to copy values from an array and not their references </b>. Spread operator is only available starting in ES6

```javascript
let first = [1, 2, 3];
let second = [1, 2, 3];

//Concatenation using spread operator by copying only values inside the array and not references
let combined = [...first, ...second];
console.log(combined);
```

```
## [ 1, 2, 3, 1, 2, 3 ]
```

### 16.7 Callback function for arrays to manipulate each data element using "forEach" 

```javascript
let first = [1, 2, 3];
first.forEach((value,position) => console.log(position, value)); 
//first argument in the call-back function for 'forEach' defaults to value of the element in the array 
// while second argument defaults to the position of the value
```

```
## 0 1
## 1 2
## 2 3
```

### 16.8 Stitching/joining together elements of an array to form a string 

```javascript

let first = [1, 2, 3];
console.log(first.join(','));

let msg = 'This is a udemy course on javascript';
let msgParts = msg.split(' '); // array of string fragments produced by splitting a string on space " ". 
console.log(msgParts.join('/')); //useful for URL creation
```

```
## 1,2,3
## This/is/a/udemy/course/on/javascript
```

### 16.9 Sorting function (a poor one) for a numerical array
It <b> updates the array </b> like the array manipulation function.

```javascript
console.log("*******************************************Numerical array sorting**********************************************")
let first = [3, 10, 1];
//Plain sorting
first.sort(); // sorts by converting numbers to string - not great
console.log(first);
// Advanced sorting: You can expand on the array sort function to give more control on the sorting criterion by using a callback
first.sort(function(a,b){ // a and b default to first and second values
  if (a>b) return 1; // permission to switch since I want it to be in ascending order
  if (a<b) return -1;
  return 0; //the only condition left is a===b
});
console.log(first);

console.log("******************************************String sorting ****************************************************")
first = ["English", "01English", "astrology", "mathematics", "Zoology"];
//Plain sorting
first.sort();
console.log(first);// In ascii character/string ordering, it is ordered with numbers first, followed by Capital alphabets and finally followed by small alphabets
//Sorting with a call back function  
first.sort(function(a,b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (b>a) return  1;//Descending order sort
  if (a>b) return -1;
  return 0;
});
console.log(first);
```

```
## *******************************************Numerical array sorting**********************************************
## [ 1, 10, 3 ]
## [ 1, 3, 10 ]
## ******************************************String sorting ****************************************************
## [ '01English', 'English', 'Zoology', 'astrology', 'mathematics' ]
## [ 'Zoology', 'mathematics', 'English', 'astrology', '01English' ]
```

### 16.10 Reversing an array

```javascript
let first = [3, 10, 1];
first.reverse(); 
console.log(first);
```

```
## [ 1, 10, 3 ]
```

### 16.11 Every and Some function of an array- a way to test the quality of an array
These functions help to answer questions like 
1. "Does EVERY element in the array satisfy a certain criterion?"
2. "Do at least SOME elements in the array satisfy a certain criterion?"

```javascript
let nums = [1, 2, 3, -1 , 4];

//"every" will check if every element in the array meets a certain criterion and will stop when it hits the first false
let positiveTest= nums.every(function (x){//other arguments are an array and index 
  return x>0;
});
console.log(positiveTest);//returns true or false

//"some" will check if atleast one element matches a certain criterion. Hence will stop as soon as it hits the first TRUE
let atleast1PositiveTest = nums.some(function (x){//other arguments are an array and index 
  return x>0;
});
console.log(atleast1PositiveTest);//returns true or false
```

```
## false
## true
```

### 16.12 Filtering an array using callback function

```javascript
let nums = [1, 2, 3, -1, 4];

let positiveFiltered = nums.filter(value=> value>0);//selects values that return true to the filtering criterion
console.log(positiveFiltered);
```

```
## [ 1, 2, 3, 4 ]
```

### 16.13 Mapping an array - A VERY POWERFUL TOOL

```javascript

//Map the elements of an array to html markup items
let nums = [1, 2, 3, -1, 4];
let positiveFiltered = nums.filter(value => value>0); //selects numbers that are positive
let htmlListItems = positiveFiltered.map(n=>'<li>'+n+'</li>');//<li> (list item element) shows items as a bullet point
console.log(htmlListItems);

// joining the list into a string
catListItems = htmlListItems.join(""); // by default sep=",". ""=blank
console.log(catListItems);
// <ul></ul> is necessary html markup for getting bullet pointed numbers.
let htmlProper = '<ul>'+catListItems + '</ul>';
console.log(htmlProper);

//Map the elements to an object - the syntax used here is the more full fledged syntax of the map function
let objectList = nums.map(
  value => {
  return {id:value};
}
);
console.log(objectList);
//Alternate way to write the same thing above
let objectList1 = nums.map(value => ({id:value}));
console.log(objectList1);
```

```
## [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]
## <li>1</li><li>2</li><li>3</li><li>4</li>
## <ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>
## [ { id: 1 }, { id: 2 }, { id: 3 }, { id: -1 }, { id: 4 } ]
## [ { id: 1 }, { id: 2 }, { id: 3 }, { id: -1 }, { id: 4 } ]
```

### 16.4 Chaining multiple methods - ANOTHER POWERFUL TOOL

```javascript
let nums = [1,2,3,-1,4];
//pipleine of methods: array output from one method passed on as inputs to another method 
let finalResult = nums
.filter(num => num>0)
.map(num => ({id:num}))
.filter(obj => obj.id>1)
.map(function(obj){
return obj.id    
});
console.log(finalResult);
```

```
## [ 2, 3, 4 ]
```

### 16.5 Reducing an Array - ANOTHER POWERFUL TOOL
The REDUCE method reduces an array by performing calculations through call-back functions.


```javascript
let nums = [1,2,3,-1,4];

//traditional method of calculating sum of array elements
let sum =0;
for (value of nums)
  sum+=value;
console.log(sum);

//calculate array sum by reduce method  
//Concept of accumulator = 0, This value can also be initialized outside the function. 
let sum1 = nums.reduce(function(accumulator, value){
  return accumulator+value;//this is assigned to accumulator for the next iteration.
}, 0); //the second argument is the initial value of accumulator. 
// If there are no initial values, accumulator takes the first value in the array.
console.log(sum1);

//simplifying syntax for reduce by arrow => method  
let sum2 = nums.reduce((accumulator, value)=> accumulator+value, 0)
console.log(sum2);
```

```
## 9
## 9
## 9
```

### 16.6 Exercises on arrays


```javascript
console.log("*****************************Ex 1: Generate arrays with range specified**********************");
//Ex 1: Generate arrays with range specified
let array = [];
let arrayGenerator = function (min,max){
for (let i=min; i<=max; i++) 
    array.push(i);
return array;  
}
console.log(arrayGenerator(-4,6));

console.log("\n*****************************Ex 2: Whether an array includes an element or not**************");
//Ex 2: On includes - check whether a certain element is present in an array or not  
let numToBeChecked = 5;
let array1 = [4,3,2,1,5,2];

function includes(searchValue, array) {
  return array.some(value => value==searchValue);
}
console.log(includes(numToBeChecked,array1));
console.log(array1.includes(6));//an alternate approach as the array object carries the in-built method
// some, every and includes are useful in-built array search methods

console.log("\n********************************Ex 3. Print array values except if it belongs to the exception list")
//Ex 3: Print array values except if it belongs to the exception list
let exceptionList = [-1, -4, 100];
let array2 = [1, 3, 5, 6, -1, 10, 25];

let filterArray = function (arrayFilter, array) {
  return array.filter(value => !(arrayFilter.includes(value)))
}
console.log(filterArray(exceptionList, array2))

console.log("\n*********************************Ex 4. Moving an element within an array ************************");
// Ex 4. Shifting an array element within an array by amount = offset 
// Note you can always exit out of a function by returning nothing

let array3 =[1, 8, 2, 3, -1, 4, 5, 6];
let index = 4;
let offset = -4;

function shiftAnElement (array, index, offset){
  if ((index+offset>=array.length)||(index+offset<0)) {
    return "Invalid parameters for index and offset!";
    //an alternate approach
    //console.error("Invalid parameters for index and offset!")
    //return;
  }
  
  let value = array[index];
  array.splice(index,1);
  array.splice(index+offset, 0, value);
  return array;
}
console.log(shiftAnElement(array3, index, offset));

console.log("\n*********************************Ex 5. Count Occurences *********************************")
//Reduce is an alternate way to count elements due to the accumulator function. If an element not present, return 0

let array4= [7000, 23, 34, 56, 34, 45, 72];
let searchElement = 54; 

// Approach 1 : Filter function
console.log(array4.filter(value => value == searchElement).length);

// Approach 2 : Reduce method
let count = array4.reduce(((accumulator, value) => accumulator + ((value ==searchElement)?1:0)),0)
console.log(count);

console.log("\n*********************************Ex 6. Get Max ******************************************")
//Getting maximum value in an array

let array5 = array4;
console.log("*****Approach 1: Sorting Method *********************")
// Approach 1: Sorting method
array5.sort((value1,value2) => {
  if (value1 > value2) return -1;
  if (value1 == value2) return 0;
  return 1;
})
console.log(array5[0])

array5= array4;
console.log("*****Approach 2: Reduce Method **********************")
//Approach 2: Reduce method
let max = array5.reduce((a, b) => (a>b)?a:b)
console.log(max);

//handy way to display error messages different from regular console messages
console.error("\nThis is a test error message");

console.log("\n*******************************Ex 7. Sorting movie records****************************************")
// sort movies in year 2018 by ratings that have ratings more than 4

let movies  = [
  {title:'a', year:2018, ratings:4.5}, 
  {title:'b', year:2018, ratings:4.7}, 
  {title:'c', year:2018, ratings:3.0}, 
  {title:'d', year:2018, ratings:4.2},
  {title:'e', year:2018, ratings:4.7},
  {title:'f', year:2018, ratings:4.7}
];

console.log("\n Without using mapping function")
movies.filter(item => (item.ratings >=4 && item.year == 2018))
      .sort((item1, item2) => item1.ratings-item2.ratings) //return of a positive number will trigger a swap
      .forEach(item => {
       console.log(item.title);
       });

console.log("\n using a mapping function")
movies.filter(value => value.year===2018 && value.ratings>=4)
      .sort((a,b)=> b.ratings-a.ratings) // you can keep it as a.rating-b.rating and do a reverse.
      .map((value => value.title))
      .forEach(value => console.log(value));

```

```
## *****************************Ex 1: Generate arrays with range specified**********************
## [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6 ]
## 
## *****************************Ex 2: Whether an array includes an element or not**************
## true
## false
## 
## ********************************Ex 3. Print array values except if it belongs to the exception list
## [ 1, 3, 5, 6, 10, 25 ]
## 
## *********************************Ex 4. Moving an element within an array ************************
## [ -1, 1, 8, 2, 3, 4, 5, 6 ]
## 
## *********************************Ex 5. Count Occurences *********************************
## 0
## 0
## 
## *********************************Ex 6. Get Max ******************************************
## *****Approach 1: Sorting Method *********************
## 7000
## *****Approach 2: Reduce Method **********************
## 7000
## 
## This is a test error message
## 
## *******************************Ex 7. Sorting movie records****************************************
## 
##  Without using mapping function
## d
## a
## b
## e
## f
## 
##  using a mapping function
## b
## e
## f
## a
## d
```
***************************************************************************************************************************************
## 17.Functions in Detail

### 17.1 Recap of basic function properties

```javascript
// function declaration syntax
// approach 1: named function declaration
walk();
function walk (){
console.log('walking is good for you');  
};

// approach 2: anonymously named function expression
// referenced by a variable name. Since functions are reference data types, the variable only stores reference.
let run = function () {
  console.log ("jogging is also called running");
}

// functions are reference data types
run();
let jog = run; // jog and run store the reference or address to the same anonymous function expression. Change made to one will reflect on the other too.
run.distance = 10;
console.log(jog.distance);
```

```
## walking is good for you
## jogging is also called running
## 10
```

<b> Function Hoisting </b> is the process of moving all function declarations to the top of the file by the javascript engine. You can call and execute a function though the function's declaration itself only happens further down the script. <b> Function Hoisting does not apply when you define the function as a variable or a constant using function expression.</b>

Functions in Javascript are <b> dynamic </b>. 
1. Properties to a function can be added after the function's declaration 
2. The number of arguments that can be passed to a function is not strictly defined. In practice, you can pass any number of arguments to a function. This property could be advantageous in situations where the number of arguments 
is not properly known beforehand. <b> The arguments to a function get stored inside the property called "arguments" of the function object.</b>. Therefore, the current set of arguments passed to a function can be accessed through there. 

If you want to know what the elements of an object are and their values, you can cycle through them through the object property/method iterator in a loop.


```javascript
let sumOfElements= function (){
//console.log(arguments); // arguments is an object (an object within an object) that store values of arguments as properties of an object that can be accessed by indices.

let total = 0;

for (let value of arguments) // not all the objects are iteratable using for-of. For-in is a sure-fire way.
      total+=value;

return total;
}

console.log(sumOfElements(2, 2, -2, -1, 34, 'a'));
```

```
## 35a
```

### 17.2  REST operator (...) in the context of functions 
REST operator looks exactly the same as SPREAD operator. It packs arguments as an array. A few points to note:  
<b> 
1. REST operator does the inverse of SPREAD operator - one packs the values in an array while the others breaks open and releases the values
2. If used with other arguments, rest should be the last formal argument of the function</b>.


```javascript
//Example1
let displayAsArray = function (...args) { //In this way, the function can have varying number of arguments
  console.log(args); //array of arguments. You can apply the various array methods here. 
}
displayAsArray(2,3,4,5);

//Example2
//Calculate discounted total price
let priceCalculator = function (discount, ...prices){
  return (1-discount)*prices.reduce((total,value) => total+value)
}
console.log(priceCalculator(0.15, 20, 30, 5, 4));//15% discount
```

```
## [ 2, 3, 4, 5 ]
## 50.15
```

### 17.3 Default parameters in a function 

1. You can specify default values for parameters before the function is called.

2. Use logical OR to extract the truthy value between 2 values or the user value between two truthy values

```javascript
let interestCalculator = function (principal, rate, years){
  rate = rate || 5;
  years = years || 5;
  return principal*rate/100*years;
}

console.log(interestCalculator(5000,'', ''));
```

```
## 1250
```
