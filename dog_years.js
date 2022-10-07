//Dog Years Project

//Input your Age
const myAge = 21;

//Early years
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);

//Later years with early years accounted for
let laterYears = myAge - 2;
laterYears *= 4;
console.log(laterYears);

//Age in Dog Years
myAgeInDogYears = earlyYears+ laterYears;
console.log(myAgeInDogYears);

//Name
let myName = 'Joseph'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);