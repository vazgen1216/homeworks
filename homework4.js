function findSmallestNumberWithProduct(n) {
    
    if (n === 0) {
        return 10
    }

    
    let result = ""
    
   
    for (let i = 9; i > 1; i--) {
        while (n % i === 0) {
            result = i + result 
            n /= i
        }
    }

   
    if (n > 1) {
        return -1
    }

    return Number(result)
}



findSmallestNumberWithProduct(96)

////2

function findGCD(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)

    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }

    return a
}


const num1 = 24
const num2 = 36

findGCD(num1, num2)

////3

function printPrimeFactors(number) {
    if (number < 2) {
        console.log("Prime  is not possible for numbers less than 2.")
        return
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            console.log(i)
            number /= i
        }
    }

    if (number > 1) {
        console.log(number)
    }
}


const inputNumber = 56;\

printPrimeFactors(inputNumber)



/////4

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  }
  
  factorial(5)


  ///5




  function fibonacci(n) {
    if (n === 0) {
      return 0
    } else if (n === 1) {
      return 1
    } else {
      let a = 0
      let b = 1
      let result
  
      for (let i = 2; i <= n; i++) {
        result = a + b
        a = b
        b = result
      }
  
      return result
    }
  }
  
  
  fibonacci(10)




  ///6
  function fibonacciSeriesUpToN(n) {
    let a = 0
    let b = 1
    let series = [a, b]
  
    for (let i = 2; a + b <= n; i++) {
      let nextFibonacci = a + b
      series = series.concat(nextFibonacci)
      a = b
      b = nextFibonacci
    }
  
    return series
  }
  
  fibonacciSeriesUpToN(56)
  