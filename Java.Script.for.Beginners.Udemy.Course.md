---
title: "Ready Reference for Java Script Programming Basics Part 1"
author: "Annamalai Muthiah"
date: "12/15/2020"
output: 
  html_document:
    keep_md: yes
---



### Acknowledgement 
My primary source for this "Ready Reference for Java Script Programming Basics Part 1" document is the Udemy Course titled "JavaScript - Master the Fundamentals in 6 Hours" by Mosh Hamedani. https://www.udemy.com/course/javascript-basics-for-beginners/

# Introduction
JavaScript (JS) forms the basis for so much of front-end web application development. While HTML covers the stylistic aspect and overall appearance of a web page, JS is generally used to control the behavior of the page as the customer interacts with the page. JS is currently the most popular and widely used programming languages in the world among programing, scripting and markup languages. There is a reason for this because it can do many wonderful things such as graphs, animations and many other web features. In this part- 1 document, I have highlighted the basic grammar or synatx in JS of some of the traditional programming concepts such as variable definitions, arrays and functions.

# How to execute JavaScript (JS) code? 
JS is executed by JS engine. You can either use the JS engine available in web browsers such as Chrome (V8 engine) or install node.js. Node engine was developed by inserting JS programming language into C++. Due to Node, it became possible to execute JS program outside a browser environment. The best editor for JS is Microsoft Visual Studio Code software (VS code)- lightweight, cross platform and a powerful editor.

# Programming Concepts in JS

## 1. How to define a variable and the different types of variables?
'let' is used to label a variable while 'const' is the label for constants. JS has the following <b> primitive data types </b> - string, number, boolean, null and undefined. JS is flexible to allow dynamic typing - changing the types of variables in the course of programming. The more advanced variable types are called the <b> reference variable types </b>. 
The following are the types of reference variables in JavaScript (JS): Objects (store variables that describe the properties of an object/person/entity), arrays (stores a list of values) and functions. 


```javascript
// Variable definition
let sentence = 'Programming in JS reminds me so much of C++'; //string literal
let age = 35; //number literal
let isIntelligent = true; //boolean literal
let mysteryVariable; // type can not be defined. Therefore undefined type.

// print the message on the console (output line #1)
console.log(sentence); //Way to output the message on the node console. Similar to printing function in many other languages. If you try this command using a web browser, the output message did not appear on the web page because it appears inside the console of the webpage.

// reveals the data type of the variable (output line #2)
console.log(typeof(isIntelligent)) 

// see below for output
```

```
## Programming in JS reminds me so much of C++
## boolean
```

*****************************************************************************************************************
Below code fragment explains the concept of <b> Null Variables </b>


```javascript
let blankVariable = null; // undefined but blank value. It can be assigned in the future to any type.
console.log(typeof(blankVariable)) // does not come out as null. Instead comes out as object. Interesting!
blankVariable = 1;
console.log(typeof(blankVariable)) // instead of print, if you want the value to appear in the console, try console.log()

// see below for output
```

```
## object
## number
```

***************************************************************************************************************
Below code fragment explains the concept of <b> Dynamic Typing </b>


```javascript
//Dynamic typing
age = 'TBD'
console.log(typeof(age)) // see age, though initially a number, can now become a string. This is called dynamic typing of variables.

// see below for output
```

```
## string
```

*****************************************************************************************************************
### Here are few example of reference variable definitions in JS.

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

// since an Array is an object, it has properties/functions within it that can be referenced. 
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

3. 










