//Write a function that takes an array of integers (arr) as input. The function should find the two numbers that appear twice in the array and return an array containing those two numbers.

//For example, given the array [2, 3, 4, 2, 7, 4], the function should return [2, 4] since both 2 and 4 appear twice in the array.

function findDuplicates(arr) {
  const numMap = new Map();
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (numMap.has(num)) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      numMap.set(num, true);
    }
  }

  return duplicates;
}

// Example usage
const array = [2, 3, 4, 2, 7, 4];
const result = findDuplicates(array);
console.log(`Numbers that appear twice in the array: [${result}]`);
