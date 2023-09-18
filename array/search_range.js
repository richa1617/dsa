/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

function searchRange(nums, target) {
  const findFirst = (target) => {
    let start = 0;
    let end = nums.length - 1;
    let firstOccurrence = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] >= target) {
        end = mid - 1;
        firstOccurrence = mid;
      } else {
        start = mid + 1;
      }
    }

    return firstOccurrence;
  };

  const findLast = (target) => {
    let start = 0;
    let end = nums.length - 1;
    let lastOccurrence = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] <= target) {
        start = mid + 1;
        lastOccurrence = mid;
      } else {
        end = mid - 1;
      }
    }

    return lastOccurrence;
  };

  const firstIndex = findFirst(target);

  if (firstIndex === -1) {
    return [-1, -1];
  }

  const lastIndex = findLast(target);

  return [firstIndex, lastIndex];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]
