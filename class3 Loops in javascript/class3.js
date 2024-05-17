// ? for loop
console.log("for loop");
for (let num = 1; num <= 10; num++) {
    console.log("Umair");
}

{let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);}

{// ? while loop
console.log("while loop");
i = 1
while (i <= 10) {
    console.log(i);
    i++;
}}

{// ? do while loop
console.log("do while loop");
i = 1
do {
    console.log(i);
    i++;
} while (i <= 10);}

{// ? for of loops
console.log("for-of loop");
Name = "Umair Nawaz";
size = 0;
for (i of Name) {
    console.log(i);
    size++;
}
console.log(size);}

{// ? for-in loop
student = {
    firstName: "Umair",
    lastName: "Nawaz",
    age: 16
}
for (let key in student) {
    console.log(key, student[key]);
}}

//! Practice Questions
// Qs1. Print all even numbers from 0 to 100.
console.log("Calculating Even Numbers in 100")
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// Qs2.
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
num = 23;
userInput = prompt('Enter game number');
while (userInput != num) {
    userInput = prompt('You entered wrong number, please try again');
} 
console.log('Congratulations, you have successfully entered');

//? Template literals
let fulName = `Umair`;
console.log(typeof fulName);

let obj = {
    item: 'Rubiks Cube',
    price: 200
};
                                                    // escape characters: \n
let output = `The Price of ${obj.item} is ${obj.price} and\ndiscount for two will be ${obj.price + 80 /*we can add also expression.*/} rupees`;
console.log(output);

// for tab spaces                                      
let str = "Umair\tNawaz";
console.log(str.length);

// ? String Methods
let str1 = "Hello, world";
let newStr = str.toUpperCase();

console.log(newStr);

let newStr2 = str.toLowerCase();
console.log(newStr2);

// trim method
let newstr = "    Hello,   world    ";
let str3 = str.trim();
console.log(str3);

//? slice method
let slice = "Hello, world!";
console.log(slice.slice(3, 8));

//? concat method
let con = "Hello";
let cat = "Umair";
let res = con.concat(cat);
let res1 = cat.concat(con);
console.log(res);
console.log(res1);

//? replace method
let rep = "hello";
let rep1 = rep.replace("lo", "p");
console.log(rep1);

//? charAt method
let charAt = "Umair Nawaz";
console.log(charAt.charAt(3));
console.log(charAt.charAt(2));

//! Practice Question
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra”, username should be “@shradhakhapra13”

let fullName = prompt('Please enter your full name without spaces');
let username = '@' + fullName + fullName.length;
console.log(username.toLowerCase());