//Given an array of N integers. Find the first element that occurs at least K number of times.

function  firstElemKTimes (arr,k){
    let hash=new Map()
    if (k==1){
        return arr[0]
    }
    

    for(let i=0;i<arr.length;i++){
        if(!hash.has(arr[i])){
          hash.set(arr[i],1)
        } else{
            hash.set(arr[i],hash.get(arr[i])+1)

            if(hash.get(arr[i])==k){
                return arr[i]
            }
        }
    }
    return -1
}

console.log(firstElemKTimes([4,2,2,2,3,4,4,4,3,2],3))

