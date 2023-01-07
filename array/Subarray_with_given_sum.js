//Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S and return the left and right index(1-based indexing) of that subarray.

function sum(arr, k) {

    for (let i = 0; i < arr.length; i++) {

        let start = arr[i];
        for (let j = i + 1; j < arr.length; j++) {

            start = start + arr[j];

            if (sum == k) {
                `Sum found between index ${start} and ${j}`;
            }
        }

    }

}
console.log(sum([1, 2, 3, 7, 6], 12));