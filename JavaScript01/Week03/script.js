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

