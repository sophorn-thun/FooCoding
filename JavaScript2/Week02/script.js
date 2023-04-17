// Rewrite doubleOddNumbers

let myNumbers = [1, 2, 3, 4, 5];
let doubleOddNumbers = myNumbers
  .filter(number => number % 2 !== 0)
  .map(oddNumber => oddNumber * 2);

console.log(doubleOddNumbers);

// Question 1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

let earningMonday = monday
  .map(task => task.duration > 5 ? task.duration / 60 : task.duration)
  .filter(atLeastTwoHour => atLeastTwoHour >= 2)
  .map(earnings => earnings*20)

console.log(earningMonday);

let earningTuesday = tuesday
  .map(task => task.duration > 5 ? task.duration / 60 : task.duration)
  .filter(atLeastTwoHour => atLeastTwoHour >= 2)
  .map(earnings => earnings*20)

console.log(earningTuesday);

// Total earnings
let totalEarning = earningMonday.concat(earningTuesday)
  .reduce((earning1, earning2) => earning1 + earning2, 0);
console.log(totalEarning);

let totalEarningEuro = totalEarning.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});

console.log(totalEarningEuro);


