
/* 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type */

let x = 5;
console.log(x);
let y = "test";
console.log(y);
let z = true;
console.log(z);
let a = null;
console.log(a);

console.log("the type of variable x is number");
console.log("the type of variable y is string");
console.log("the type of variable z is boolean");
console.log("the type of variable a is object");

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);

if (x === y) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (x === z) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (x === a) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (y === z) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (y === a) {
  console.log('Same type');
} else {
  console.log('Different type');
};

if (z === a) {
  console.log('Same type');
} else {
  console.log('Different type');
};

