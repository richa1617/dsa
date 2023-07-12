//Write a function that takes two arrays of numbers as input and returns a new array containing the common elements found in both input arrays.

function findCommonElements(arr1, arr2) {
  let commonElements = [];
  let visited = {};

  for (let i = 0; i < arr1.length; i++) {
    visited[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (visited[arr2[j]]) {
      commonElements.push(arr2[j]);
      visited[arr2[j]] = false;
    }
  }

  return commonElements;
}

console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // Output: [4, 5]
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // Output: []
console.log(findCommonElements([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
