//Write a function that takes a string str as input and returns an integer representing the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let visited = {};

  for (let i = 0; i < str.length; i++) {
    if (visited[str[i]] !== undefined && visited[str[i]] >= start) {
      start = visited[str[i]] + 1;
    }
    visited[str[i]] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 )
