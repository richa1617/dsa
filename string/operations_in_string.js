//You are given a sentence as a string. Write a function that performs the following operations on the sentence:

//Split the sentence into an array of words.
//Capitalize the first letter of each word.
//Join the words back into a sentence.

function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });

  const capitalizedSentence = capitalizedWords.join(" ");

  return capitalizedSentence;
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(capitalizeWords("javascript is awesome")); // Output: "Javascript Is Awesome"
console.log(capitalizeWords("keep coding")); // Output: "Keep Coding"
