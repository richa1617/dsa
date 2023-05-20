//Given a string s, find the length of the longest substring without repeating characters

function lengthofSubstring (s){
    
    let left =0;
    let right=0
    let max =0

    const map =new Map()

    while (right <s.length){
        if( !map.has(s[right])){
            map.set(s[right])
            right++
            max= Math.max(max,map.size)
        }else{
            map.delete(s[left])
            left++
        }
    }
    return max
}

console.log(lengthofSubstring("abcabccb"))

