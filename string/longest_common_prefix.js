//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".


function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
  
    strs.sort();
  
    let firstStr = strs[0];
    let lastStr = strs[strs.length - 1];
    
    let result = "";
    let i = 0;
  
    while (i < firstStr.length && firstStr[i] === lastStr[i]) {
      result += firstStr[i];
      i++;
    }
  
    return result;
  }
  

  console.log(longestCommonPrefix(["flower","flow","flight"])) //fl
  console.log(longestCommonPrefix(["dog","racecar","car"]))//""
  console.log(longestCommonPrefix(["flower"])) //flower