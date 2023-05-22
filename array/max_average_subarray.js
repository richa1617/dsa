
//You are given an integer array nums consisting of n elements, and an integer k.

//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function max_Avg(arr,k){
    let left=0;
    let right=k
    let avg=0
    let sum=0
    let result=0

    for(let i=0;i<k;i++){
     sum=sum+arr[i]
     avg= sum/k
     result= avg
    }

    while(right< arr.length){
        sum=sum-arr[left]+arr[right]
        avg= sum/k
       result= Math.max(avg,result)
       left++;
       right++
    }

    return result
}

console.log(max_Avg([1,12,-5,-6,50,3],4))