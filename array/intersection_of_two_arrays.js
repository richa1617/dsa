// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



function union (arr1,arr2){

    let result=[]
    let n1=arr1.sort((a,b)=>a-b)
    let n2=arr2.sort((a,b)=>a-b)
    let i=0
    let j=0
    while(i<n1.length && j< n2.length){
     if(n1[i]=== n2[j]){
        result.push(n1[i])
        i++;
        j++
     } else if (n1[i] < n2[j]){
        i++
     } else{
        j++
     }
    }

    return result
}


console.log(union([4,9,5],[9,4,9,8,4]))