/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/

function convertToTitle(columnNumber) {
    let ans = '';
  
    while (columnNumber > 0) {
      const remainder = (columnNumber - 1) % 26;
      const char = String.fromCharCode(65 + remainder);
      ans = char + ans;
      columnNumber = Math.floor((columnNumber - 1) / 26);
    }
  
    return ans;
  }

  console.log(convertToTitle(1)) //A
  console.log(convertToTitle(28))  //AB
  console.log(convertToTitle(701)) //ZY