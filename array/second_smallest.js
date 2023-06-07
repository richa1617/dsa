//Write a function that takes an array of numbers as input and returns the second smallest element in the array.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return undefined; // Not enough elements in the array
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest !== Infinity ? secondSmallest : undefined;
}

console.log(findSecondSmallest([5, 2, 8, 1, 7])); // Output: 2
console.log(findSecondSmallest([9, 3, 6, 1, 7])); // Output: 3
console.log(findSecondSmallest([5, 5, 5, 5])); // Output: undefined (no distinct second smallest element)
