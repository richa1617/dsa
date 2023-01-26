//Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 


function leaders(arr) {
    let lead = [];
    for (let i = 0; i < arr.length; i++) {
            let j;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        if (j === arr.length) {
            lead.push(arr[i]);
        }
    }

    return lead;
}

console.log(leaders([16, 17, 4, 3, 5, 2]));