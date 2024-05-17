// In Chapter 2 I will Learn about Operators and Conditional Statements
//Arthimetic operators
let a = 7;
let b = 9;
console.log("a = ", a, " & b = ", b);

console.log("a + b = ", a+b,);
console.log("a - b = ", a-b,);
console.log("a x b = ", a*b,);
console.log("a / b = ", a/b,);
console.log("a % b = ", a%b,);
console.log("a ^ b = ", a**b,); // 7^9

//Unary Operators
 console.log("a++ = ", a++); // First it will print the value and then change it.
 console.log(a);
 console.log("b-- = ", b--); // First it will print the value and then change it.
 console.log(b);
 let c = 5;
let d = 6;
console.log("++c = ", ++c); // First it will change the value then print it.
console.log("--d = ", --d); // First it will change the value then print it.

// if, if-else & else statement:
let num = 13;

if (num/2 ===0) {
    console.log(num, "is Even.")
} else {
    console.log(num, "is Odd.")
}

let mode = "blue";
let color;

if (mode === "dark") {
    color = "black"
} else if(mode === "blue") {
    color = "blue";
} else if(mode === "gray") {
    color = "gray";
} else {
    color = "white";
}
console.log(color)

// Ternary Operators
let age = 16;
let result = age >= 18? "adult" : "Not adult";
console.log(result)

alert("Hellow"); //one time pop

// prompt a built-in function
const name = prompt("Type Your Name:");
console.log("Hellow", name)


//Practice Question
// Q1: Get user to input a number using prompt, Check if the number is multiple of 5 or not.
let number = prompt("Enter a Number:");
if (number%5 === 0) {
    console.log(number, "is a multiple of 5.")
} else {
    console.log(number, "is not a multiple of 5.")
}

/* Qs2. Write a code which can give grades to students according to their scores:
i. 80-100, A
ii. 70-89, B
iii. 60-69, C
iv. 50-59, D
v. 0-49, F */
let score = prompt("Enter Your Score:");
if (score >= 80 && score <= 100) {
    console.log("A Grade");
} else if(score >= 70 && score <= 79) {
    console.log("B Grade")
} else if(score >= 60 && score <= 69) {
    console.log("C Grade")
} else if(score >= 50 && score <= 59) {
    console.log("D Grade")
} else {
    console.log("F Grade")
}