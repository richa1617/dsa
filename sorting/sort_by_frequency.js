/*
Sort Array by Increasing Frequency

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.


*/

function frequencySort(nums) {
  const frequencyMap = {};

  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  nums.sort((a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    if (freqA !== freqB) {
      return freqA - freqB;
    } else {
      return b - a;
    }
  });

  return nums;
}

const nums = [2, 3, 1, 3, 2];
console.log(frequencySort(nums)); // Output: [1, 3, 3, 2, 2]
