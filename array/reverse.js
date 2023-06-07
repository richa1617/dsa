
//Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.



function reverseArr(input) {
    let result  = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        result.push(input[i]);
    }
    return result
}

let a = [3,5,7,8]
let b = reverseArr(a);