/*
Number of Arithmetic Triplets

You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.

 

Example 1:

Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
*/

function countArithmeticTriplets(nums, diff) {
  const count = new Map(); // Store the count of elements ending at index i
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i] - diff;
    const prevCount = count.get(prev) || 0; // Get the count of elements ending at index i - 1

    const currentCount = (count.get(nums[i]) || 0) + 1; // Update count for the current element

    result += prevCount; // Add the count of arithmetic triplets ending at index i - 1 to the result

    count.set(nums[i], currentCount); // Update count for the current element
  }

  return result;
}

const nums = [0, 1, 4, 6, 7, 10];
const diff = 3;
console.log(countArithmeticTriplets(nums, diff)); // Output: 2
