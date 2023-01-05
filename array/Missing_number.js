//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.


function missing_number(arr, n) {
    let total_arr = 0
    let total_n=0
    for (let i = 0; i < arr.length; i++){
        total_arr+=arr[i]
    }

    for (let i = 1; i <= n; i++){
        total_n+=i
    }

    return total_n-total_arr
}

console.log(missing_number([6, 1, 2, 8, 3, 4, 7, 10, 5], 10))
console.log(missing_number([1,2],3))