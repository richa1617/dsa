/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 */

function strStr(haystack, needle) {
    if(needle === "" || needle === haystack) return 0;
    
    let left = 0;
    let right = needle.length;
    
    while(left < haystack.length){
        let strToBeSearched = haystack.slice(left,right);
        if(strToBeSearched === needle){
            return left;
        } else {
            left++;
            right++;
        }
    }
    return -1;
}

console.log(strStr("sadbutstad" ,"sad")) //0
console.log(strStr("leetcode" ,"leeto")) //-1
console.log(strStr("leetcode" ,"etco")) //2