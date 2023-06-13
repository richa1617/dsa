//Given an array of integers, find the number that appears an odd number of times. Return that number.
//Write a function that takes an array of integers (arr) as input. The function should find the number that appears an odd number of times in the array and return it.

//For example, given the array [2, 3, 4, 4, 2, 5, 5, 3, 3], the function should return 3 since it appears three times in the array, which is an odd number of times.

function findOddNumber(arr) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  }

  for (const [num, count] of numMap) {
    if (count % 2 !== 0) {
      return num;
    }
  }

  return null;
}

// Example usage
const array = [2, 3, 4, 4, 2, 5, 5, 3, 3];
const result = findOddNumber(array);
console.log(`Number that appears an odd number of times: ${result}`);
