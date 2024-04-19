const myAge = 19;
// my human age, doesnt change until bday (far)

let earlyYears = 2;
// not sure what's this is about but another variable that will change
earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;
// it will take 2 from 19 and make it on the new variable
laterYears *= 4;

// This line makes the variable instantly reassign after it multiples its value by 4
console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears;
// that will take both variables and sum them up
const myName = "VitOr MendOnça".toLowerCase();
// that will take the string value (text.method) and do its method to store the value into the variable

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// we are using string interpolation so we can insert the templates for the variables to print up with the text.
