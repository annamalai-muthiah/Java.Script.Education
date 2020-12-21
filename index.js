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

//Objects: indicated by the use of {}
let Person = {
    firstName : 'Annamalai', // note variable values are assigned by :
    middleName : null,
    lastName : 'Muthiah',
    Age : 35
    }
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
};
// calling the function and printing the result of the function on the console 
console.log(greet('Annamalai', 'Muthiah'))


// ************************************************* Operators ****************************************//
// There are five different types of Operators in JS - Arithmetic, Assignment, Comparison, Logical and Bitwise

// Arithmetic operators - addition, substraction, multiplication, division, 
// remainder (indicated by symbol %),  exponent operator (indicated by symbol '**'), increment and decrement 
// The first 5 are fairly straightforward. However the exponenet, incremenet and decrement operators operate unsually which I wanted to highlight.
x=10; y=3;
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
console.log(checkSpeed(130));
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
}
}
}

