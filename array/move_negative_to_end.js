//Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative elem

function segregateElements(arr) {
  let positiveArr = [];
  let negativeArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr.push(arr[i]);
    } else {
      negativeArr.push(arr[i]);
    }
  }

  return positiveArr.concat(negativeArr);
}

let arr = [2, -5, -3, 8, -1, 0, -9, 7];
let result = segregateElements(arr);
console.log(result);
