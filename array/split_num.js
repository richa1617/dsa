/*
Split With Minimum Sum

Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

The concatenation of num1 and num2 is a permutation of num.
In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
num1 and num2 can contain leading zeros.
Return the minimum possible sum of num1 and num2.

Notes:
It is guaranteed that num does not contain any leading zeros.
The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.
 

Example 1:

Input: num = 4325
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.

*/

function minSum(num) {
  const numStr = num.toString();
  const sortedDigits = numStr.split("").sort((a, b) => a - b);

  let num1 = "";
  let num2 = "";

  for (let i = 0; i < sortedDigits.length; i++) {
    if (i % 2 === 0) {
      num1 += sortedDigits[i];
    } else {
      num2 += sortedDigits[i];
    }
  }

  return parseInt(num1) + parseInt(num2);
}

// Example usage:
const num = 4325;
console.log(minSum(num)); // Output: 59
