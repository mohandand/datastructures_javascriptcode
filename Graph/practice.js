function maximumPoints(array,k){
    let right = array.length-1;
    let lsum = 0;
    let rsum = 0;
    for(let i=0;i<array.length;i++){
        lsum += array[i];
    }
    let maxSum = lsum;
    for(i=k-1 ;k>=0;k++){
        lsum = lsum-array[k]
        rsum = rsum+lsum+array[right]
        if(maxSum<rsum){
            maxSum = rsum;
            right--
        }
    }
return maxSumnode
}

console.log(maximumPoints([1,2,3,4,5,6,1],3))