//Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to find all pairs from both arrays whose sum is equal to X.

//Note: All pairs should be printed in increasing order of u. For eg. for two pairs (u1,v1) and (u2,v2), if u1 < u2 then (u1,v1) should be printed first else second.

function allPairs ( A,B,X){
    let result=[]
    let hash= new Map()
    for(let i=0;i<B.length;i++){
        hash.set(B[i],1)
    }

    A.sort((a, b) => a - b);
    
    for(let i=0;i<A.length;i++){
        let element = X - A[i]

        if (hash.has(element)){
            
            result.push([A[i],element])
        }
    }

    return result
}

console.log(allPairs([1,2,4,5,7],[5,6,3,4,8],9))