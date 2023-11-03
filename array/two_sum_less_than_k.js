
//Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.




function twoSumLessThanK (arr,k){
   let arr1=arr.sort((a,b)=>a-b)
   let result=-1
    let i=0;
    let j=arr1.length-1

    while(i<j){
        let sum =arr1[i]+arr1[j]

        if(sum<k){
            result =Math.max(result,sum)
            i++
        }else{
            j--
        }
    }

    return result
}


console.log(twoSumLessThanK([34,23,1,24,75,33,54,8],60))