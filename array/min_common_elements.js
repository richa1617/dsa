//Write a function that takes two arrays of numbers as input and returns a new array containing the common elements found in both input arrays.

function minCommonElemn(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let k = arr1[i];
    let start = 0;
    let end = arr1.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr2[mid] == k) {
        return arr2[mid];
      } else if (arr2[mid] < k) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log(
  minCommonElemn([4, 6, 5, 8, 9, 10, 11, 12], [7, 10, 45, 56, 78, 98])
);
