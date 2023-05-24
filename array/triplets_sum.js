//Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.


function findSumOfThree(nums, target) {
 
    
    let arr= nums.sort((a,b)=>a-b)
  
    for(let i=0;i<arr.length;i++){
      let low= i+1
      let high=arr.length-1
  
      while(low<high){
          let triplet= arr[i]+arr[low]+arr[high]
  
          if(triplet == target){
              return [arr[i],arr[low], arr[high]]
          } else if(triplet < target){
              low ++
          } else {
              high--
          }
      }
    }
  
    return -1
  }
  
  
  console.log(findSumOfThree([12,3,4,1,6,9],24)) //1,3,4,6,9,12
  
  console.log(findSumOfThree([12,3,4,1,6,9],11))