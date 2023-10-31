/*

You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.

Example 1:

Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
Example 2:

Input: target = [7], arr = [7]
Output: true
Explanation: arr is equal to target without any reverses.
*/

function canBeEqual(target, arr) {
  target = target.sort((a, b) => a - b);
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target[i]) return false;
  }

  return true;
}

// Example usage:
const target1 = [1, 2, 3, 4];
const arr1 = [2, 4, 1, 3];
console.log(canBeEqual(target1, arr1)); // Output: true

const target2 = [7];
const arr2 = [7];
console.log(canBeEqual(target2, arr2)); // Output: true
