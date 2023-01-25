//Given a string S, check if it is palindrome or not.


function isPalindrome(str) {
 
    let start=0
    let end=[str.length-1]
 
    while (start < end) {
        if (str[start] ==str[end]) {
             start++
              end--
        } else {
           return false
        }
    }
    return true

}


console.log(isPalindrome("abccba"))
console.log(isPalindrome("abc"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("a"))
console.log(isPalindrome("racecar"))