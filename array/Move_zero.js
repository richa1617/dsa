//Given an array arr[] of N positive integers. Push all the zeros of the given array to the right end of the array while maitaining the order of non-zero elements.


function moveZero(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            newarr.push(0);
            i--;
        }
    }
    return arr.concat(newarr);
}
console.log(moveZero([0, 3, 5, 0, 1, 0, 0, 4, 0]));
