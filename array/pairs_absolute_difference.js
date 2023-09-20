/*
Count Number of Pairs With Absolute Difference K

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

*/

function countPairsWithAbsoluteDifferenceK(nums, k) {
  const numCount = new Map();
  let count = 0;

  for (const num of nums) {
    // Check for pairs (num, num - k) and (num, num + k)
    count += numCount.get(num - k) || 0;
    count += numCount.get(num + k) || 0;

    // Update the count of the current number in the map
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  return count;
}

const nums = [1, 3];
const k = 3;
console.log(countPairsWithAbsoluteDifferenceK(nums, k)); // Output: 4
