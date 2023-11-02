//Write a function that takes a positive integer as input and returns its factorial. The factorial of a number is the product of all positive integers less than or equal to it.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
