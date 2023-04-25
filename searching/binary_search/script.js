function binarySearch(arr,k){
    let start=0;
    let end=arr.length-1;
    let mid=0
    
    while(start<=end){
        mid= Math.floor((start+end)/2)

        if(arr[mid]===k){
            return mid
        } else if(arr[mid]<k){
            start=mid+1
        }else{
            end=mid-1
        }
    }
   
return -1

}

console.log(binarySearch([2,5,7,9,10,12,13,19,21],10))