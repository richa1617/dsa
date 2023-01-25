//Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. 

function anagram(a, b) {
    if (a.length != b.length) {
        return false
    }

    let str1 = a.toLowerCase().split("").sort().join("")
    let str2 = b.toLowerCase().split("").sort().join("")
    
    
  return str1==str2
    
}


console.log(anagram("Silent", "listen"))
console.log(anagram("acts", "cat"))
console.log(anagram("act", "cat"))

console.log(anagram("a", "a"))
console.log(anagram("acttac", "ctaatc"))