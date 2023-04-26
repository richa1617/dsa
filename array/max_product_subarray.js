//Maximum Product Subarray

//Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.




function maximumProduct(arr){
    let max=0;
    let result=0

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            max=arr[i]*arr[j]
           
        }
        if (result<max){
            result=max
        }
    }
    return result

}

console.log(maximumProduct([6,-3,-10,0,2]))