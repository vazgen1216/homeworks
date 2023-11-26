////1


function hasSuccessiveZeros(num) {
    let count = 0;
    while (num > 0) {
        if (num % 10 === 0) {
            count++;
        } else {
            count = 0; // Reset count if the digit is not zero
        }

        if (count === 3) {
            return true; // Found three consecutive zeros
        }

        num = Math.floor(num / 10); // Move to the next digit
    }

    return false; // Did not find three consecutive zeros
}

function printResult(num) {
    console.log(hasSuccessiveZeros(num) ? "yes" : "no");
}
printResult(129000)
  ///// 3
function isPrime(number) {
    if (number <= 1) {
      return false
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
  
    return true
  }
  
  
  let numToCheck = 13
  if (isPrime(numToCheck)) {
    console.log(true)
  } else {
    console.log(false)
  }
  
  ///4
  function isPrime(number) {
    if (number <= 1) {
      return false
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
  
    return true
  }
  
  function findNthPrime(n) {
    if (n <= 0) {
      console.log("Please enter a positive value for n.")
      return
    }
  
    let primeCount = 0
    let candidate = 2
  
    while (primeCount < n) {
      if (isPrime(candidate)) {
        primeCount++
      }
  
      if (primeCount < n) {
        candidate++
      }
    }
  
    console.log(`The ${n}-th prime number is: ${candidate}`)
  }
  
  
  let n = 14
  findNthPrime(n)



  ////5
  function calculatePower(base, exponent) {
    
    return Math.pow(base, exponent)
}


const n = 4
const m = 5

const result = calculatePower(n, m)


console.log(` ${result}`)