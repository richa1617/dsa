//Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

//Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union


function union(a, b) {
    let result = new Set()

    for (let i = 0; i < a.length; i++){
         result.add(a[i])
        }
    
    for (let i = 0; i < b.length; i++){
          result.add(b[i])
    }
    return result.size
}

console.log(union([1, 2, 3, 4,2], [5,6,1,2,10]))