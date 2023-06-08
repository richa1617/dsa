//You are given an array of numbers. Write a function that performs the following operations on the array:

//Square each number in the array.
//Filter out the numbers that are greater than 100.
//Sum all the remaining numbers.

function sumOfSquares(arr) {
  const result = arr
    .map((num) => num ** 2)
    .filter((num) => num <= 100)
    .reduce((sum, num) => sum + num, 0);

  return result;
}

console.log(sumOfSquares([1, 2, 3, 4, 5])); // Output: 30
console.log(sumOfSquares([10, 20, 30, 40, 50])); // Output: 550
console.log(sumOfSquares([7, 8, 9, 10])); // Output: 174
