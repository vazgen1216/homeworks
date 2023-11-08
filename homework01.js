//1

const number = 123

if (number % 2 === 0) {
  console.log("even")
} else {
  console.log("odd")
}


///2
let firstNumber = 28 
let secondNumber = 56

if (firstNumber % secondNumber === 0 ) {
  console.log(1) 
} else if(secondNumber % firstNumber === 0) {
  console.log(1)
} else {
  console.log(0)
}

////3

let number1 = 367

const lastDigit = number1 % 10
const remainingNumber = Math.floor(number1 / 10)
const result = String(lastDigit) + String(remainingNumber)

if (number1 % 10 === 0) {
    console.log(number1)
} else if (number1 / 10 < 1) {
    console.log(number1)
} else {
    console.log(result)
}

/////4
let num1 = +prompt()
let num2 = +prompt()
let num3 = +prompt()
let num4 = +prompt()
let num5 = +prompt()
let sum = (num1 + num2 + num3 + num4 + num5)
let average = sum /5
console.log(average)


//5
var n = prompt();
var i = 0;
var j = 0;

if ((n % 2 === 0) && (n < 10)) {
    i += 1;
}

if (n % 3 === 0) {
    j += 1;
}

