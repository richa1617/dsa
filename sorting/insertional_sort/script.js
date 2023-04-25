//Selection Sort works by taking elements from the list one by one and then comparing the values with all the values in the list and swapping them




function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
         let lowestIndex=i
        for(let j = i+1; j < arr.length; j++){
            if(arr[lowestIndex]>arr[j]){
                  lowestIndex=j 
            }
        } 
        
        //swap
        //[arr[i],arr[lowestIndex]]=[arr[lowestIndex],arr[i]]     
  
        //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
           
    }
    return arr
}

console.log(selectionSort([7,5,2,0,19,1,6,15,2]))

