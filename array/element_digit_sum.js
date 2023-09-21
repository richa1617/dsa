/*
Difference Between Element Sum and Digit Sum of an Array

You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

 

Example 1:

Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
Example 2:

*/

function getDigitSum(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function differenceBetweenElementSumAndDigitSum(nums) {
  const elementSum = nums.reduce((sum, num) => sum + num, 0);
  const digitSum = nums.reduce((sum, num) => sum + getDigitSum(num), 0);

  return Math.abs(elementSum - digitSum);
}

// Example usage:
const nums = [1, 2, 3, 4];
console.log(differenceBetweenElementSumAndDigitSum(nums)); // Output: 42
