//Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. 


function isSubset(a1, a2) {
    for (let i = 0; i < a2.length; i++){
        if (!a1.includes(a2[i])) {
            return "No"
        }
    }

    return "Yes"
}
console.log(isSubset([8, 4, 5, 3, 1, 7, 9], [5, 1, 3, 7, 9]))


111