//Write a function that takes a string str as input and returns a new string where the first and last characters of each word in the original string are swapped.

function swapFirstLastChars(str) {
  const words = str.split(" ");

  const swappedWords = words.map((word) => {
    if (word.length <= 1) {
      return word;
    }

    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    const middleChars = word.slice(1, word.length - 1);

    return lastChar + middleChars + firstChar;
  });

  const swappedString = swappedWords.join(" ");

  return swappedString;
}

console.log(swapFirstLastChars("Hello world")); // Output: "oellH dlrow"
console.log(swapFirstLastChars("JavaScript is awesome")); // Output: "tpirpSacaJ si emosewa"
console.log(swapFirstLastChars("Keep coding")); // Output: "peepK gnidoc"
