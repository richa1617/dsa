//Write a function that takes an array of integers (arr) and a target sum (target) as input. The function should find two numbers in the array that add up to the target sum and return an array containing their indices.

//For example, given the array [2, 7, 11, 15] and target sum 9, the function should return [0, 1] since arr[0] + arr[1] equals 9.

function twoSum(arr, target) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }

  return null;
}

const array = [2, 7, 11, 15];
const targetSum = 9;
const result = twoSum(array, targetSum);
console.log(
  `Indices of the two numbers that add up to ${targetSum}: [${result}]`
);
