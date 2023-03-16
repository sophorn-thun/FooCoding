/* 1. Hello world in languages I know */
console.log('Hello, World!'); //English
console.log('សួស្តី ពិភពលោក!'); //Khmer
console.log('Hej, Världen!'); //Swedish

/* 2. Fix syntax error */
console.log("I'm awesome");

/* 3. Declare a variable x and initialize it with an integer */
let x;
console.log("the value of x will be: 10");
console.log(x);
x = 10;
console.log("the value of x will be: 10");
console.log(x);

/* 4. Declare a variable y and assign a string to it. */
let y = 'I am a string'
console.log("the value of my string will be: 'I am a string'");
console.log(y);
y = 'I am a new string';
console.log("the value of my logged string will be: 'I am a new string'");
console.log(y);

/* 5. Round the number 7.25, to the nearest integer */
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
var highestNumber;
if (z > a) {
    highestNumber = z;
}
else {
    highestNumber = a;
};
console.log(highestNumber);

/* 6. Arrays */
let animals = [];
console.log("the value of my array will be: 'cat', 'dog', 'bunny'");
console.log(animals);
animals = ['cat', 'dog', 'bunny'];
animals.push('baby pig');
console.log(animals);

/* 7. More Strings */

let myString = "this is a test";
let stringLength = myString.length;
console.log(stringLength);

/* 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type */

let var1 = 5;
console.log(var1);
let var2 = "test";
console.log(var2);
let var3 = true;
console.log(var3);
let var4 = null;
console.log(var4);

console.log("the type of variable var1 is number");
console.log("the type of variable var2 is string");
console.log("the type of variable var3 is boolean");
console.log("the type of variable var4 is object");

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);

if (var1 === var2) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (var1 === var3) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (var1 === var4) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (var2 === var3) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (var2 === var4) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (var3 === var4) {
  console.log('Same type');
} else {
  console.log('Different type');
};

