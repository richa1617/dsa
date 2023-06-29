//Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(str) {
  let vowelCount = 0;

  // Convert the string to lowercase for case-insensitive comparison
  let lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("hello")); // Output: 2
console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("racecar")); // Output: 3
console.log(countVowels("qwerty")); // Output: 1
console.log(countVowels("")); // Output: 0
