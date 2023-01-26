//Count number of occurrences for each char in a string


function count(a) {
    let hash = new Map()
    for (let i = 0; i < a.length; i++){
        if(hash.has(a[i])){
            let value = hash.get(a[i])
        
            hash.set(a[i],value+1)
        } else {
            hash.set(a[i], 1)
        }
    }
    return hash
}

console.log(count("aabbccaefab"))
console.log(count("adsjfdsfsfjsdjfhacabcsbajda"))