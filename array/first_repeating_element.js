//Given an array arr[] of size n, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.

//Note:- The position you return should be according to 1-based indexing. 

    function firstRepeated(arr, n) {
        for (let i = 0; i < arr.length; i++){
            for (let j = i + 1; j < arr.length; j++){
                if (arr[i] === arr[j]) {
                    return arr.indexOf(arr[i]) +1
                }
            }
        }
        return -1
    }

    console.log(firstRepeated([1,9,3,4,3,5,6]))