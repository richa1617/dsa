/*Given a string s, reverse only all the vowels in the string and return it.

Example 1:

Input: s = "hello"
Output: "holle"

Input: s = "leetcode"
Output: "leotcede"
*/

function reverseVowel(w) {
  let i = 0;
  let j = w.length - 1;

  let vowel = "aeiou";

  let word = [...w];
  while (i < j) {
    while (!vowel.includes(word[i]) && i < j) {
      i++;
    }
    while (!vowel.includes(word[j]) && i < j) {
      j--;
    }
    if (i < j) {
      let temp = word[i];
      word[i] = word[j];
      word[j] = temp;

      i++;
      j--;
    }
  }

  return word.join("");
}

console.log(reverseVowel("leetcode"));
