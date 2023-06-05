//Write a function that takes a string as input and returns the reversed version of the string.

function reverseString(str) {
  let arr = str.split("");

  let reversedArr = arr.reverse();

  let reversedStr = reversedArr.join("");

  return reversedStr;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("javascript")); // Output: "tpircsavaj"
console.log(reverseString("racecar")); // Output: "racecar"
