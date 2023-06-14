//Write a function that takes a string as input and returns the first non-repeating character in the string. If there are no non-repeating characters, the function should return null.

//For example, given the string "abacabad", the first non-repeating character is 'c'.

function findFirstNonRepeatingChar(str) {
  const charCount = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

const input = "abacabad";
const result = findFirstNonRepeatingChar(input);
console.log(`The first non-repeating character in "${input}" is: ${result}`);
