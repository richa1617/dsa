//Given an array of N integers, and a number sum, the task is to find the number of pairs of integers in the array whose sum is equal to sum.

function countPairs(arr, s) {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] == s) {
                count+=1
            }
        }
    }
    return count
}

console.log(countPairs([1,1,1,1], 2))