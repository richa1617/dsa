//Linear Search  every single element in an array or string one at a time and compare if it’s the value we want. It keeps going until we find it or we get to the end.

//Linear Search Big O :As input grows the number of iteration grows, so Big O Notation is  O(n) for Linear Search

function linearSearch(arr, value){
    if(arr.length === 0) return -1
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === value) {
       return i
     }
    }
    return -1
   }
   console.log(linearSearch([2, 34, 15, 17,22, 55],34)) // 1