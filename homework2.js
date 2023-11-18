//1
let number = 78756
let count = 0 
let absoluteNumber = Math.abs(number)

for(; absoluteNumber>= 1; absoluteNumber /= 10 ){
  count++
}
  console.log(count)

//1
let number = 78756;
let count = 0;
let absoluteNumber = Math.abs(number);

while (absoluteNumber >= 1) {
    absoluteNumber /= 10;
    count++;
}

console.log(count);
//2
let myNumber = 192999
let count = 0
while (myNumber>0) {
    if (myNumber % 10 === 9) {
        count++
    }
  myNumber = Math.floor(myNumber / 10)  
}
console.log(`As a result, the count of digits 9 is : ${count}`)

///2
let myNumber = 192999
let count = 0

for (; myNumber > 0; myNumber = Math.floor(myNumber / 10)) {
    if (myNumber % 10 === 9) {
        count++
    }
}

console.log(`As a result, the count of digits 9 is : ${count}`)


///3
for (let i = 0; i <= 150; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

let number = 0;

while (number <= 150) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}

///3

let number = 0;

while (number <= 150) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}
///////4

let originalNumber = 222
let result = ''

while (originalNumber > 0) {
    let digit = originalNumber % 10
    result = digit + result
     let ending2Digits = originalNumber % 100 
    let nextDigit = Math.floor(ending2Digits/ 10) 


    if (digit % 2 === 0 && nextDigit % 2 === 0 && originalNumber >= 10) {
        result = '-' + result
    }

    originalNumber = Math.floor(originalNumber / 10)
}

console.log(result)


////5

let originalNumber = 1253
let reversedNumber = 0

while (originalNumber > 0) {
    let digit = originalNumber % 10
    reversedNumber = reversedNumber * 10 + digit
    originalNumber = Math.floor(originalNumber / 10)
}


console.log(`Reversed Number: ${reversedNumber}`)


////5
let originalNumber = 1253
let reversedNumber = 0

for (; originalNumber > 0; originalNumber = Math.floor(originalNumber / 10)) {
    let digit = originalNumber % 10;
    reversedNumber = reversedNumber * 10 + digit
}


console.log(`Reversed Number: ${reversedNumber}`)