/* 1. Strings! */

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
myString = myString.split(',').join(' ');
console.log(myString);

/* 2. Arrays! */

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("I think the new value of new array is: 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'");
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
favoriteAnimals.indexOf('meerkat', 0);
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat', 0));

/* More JavaScript */

// 1. Function with 3 arguments
function sumArguments(num1, num2, num3) {
  return num1 + num2 + num3
};

sumArguments(10,20,39) //Example

/* 2. Function colorCar */
function colorCar(color) {
  return console.log('a ' + color + ' ' + 'car')
};

colorCar('red') //Insert color here

/* 3. Object function */
const myObject = {
  exampleName: 'Sam',
  exampleOccupation: 'Programmer',
  exampleAge: 30,
};

function getObject(obj) {
  return obj
};

getObject(myObject);

// 4. Function vehicleType
function vehicleType(color, code){
  if (code === 1) {
    return "a " +  color + " car"
  } else if (code === 2) {
    return "a " + color + " motobike"
  }  
};

vehicleType("red", 1);

// 5. One-line code
console.log(3 === 3 ? "yes" : "no");

// 6. vehicle Function
function vehicle(color, code, age){
  if (code === 1 && age <= 1) {
    return "a " + color + " new" + " car";
  } else if (code === 1 && age > 1) {
    return "a " + color + " used" + " car";
  } else if (code === 2 && age <= 1) {
    return "a " + color + " used" + " motobike";
  } else if (code === 2 && age > 1) {
    return "a " + color + " used" + " motobike"
  }
};

vehicle("red", 2, 1)

// 7. List of vehicles
let vehicles = ["motobike", "caravan", "bike"];
console.log(vehicles);

// 8. Get the third element
vehicles[2]
console.log(vehicles[2]);

// 9. Revised vehicles funtion
let vehicles = ["motobike", "caravan", "bike"];

function vehicle(color, code, age) {
  if (code <= 0) {
    return "Invalid code!"
  } else if (code = vehicles[code-1]) {
      if (age <= 1) {
        age = "new"
      } else if (age > 1) {
        age = "used"
      }
  } return "a " + color + " " + age + " " + code; 
};

vehicle("black", 2, 2)




