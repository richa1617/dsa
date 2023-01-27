// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.
function majorityElement(array) {
    let hash = new Map()
    let result=-1
    for (let i = 0; i < array.length; i++){
        if (hash.has(array[i])) {
            let value=hash.get(array[i])
            hash.set(array[i],value+1)
        } else {
            hash.set(array[i],1)
        }
    }
    
  
    let majorityCount = (array.length / 2)

    for (let [key, value] of hash) {
        
        if (value > majorityCount) {
            result = key
            break
        }
    }
   return result 
}
console.log(majorityElement([3, 2, 3, 3, 1]))
console.log(majorityElement([3,2,1]))