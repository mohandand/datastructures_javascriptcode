function rotatedSortedArray(nums){
    let start = 0;
    let end = nums.legth-1;

    while(start<end){
        let mid  = Math.floor((start+end)/2);
        if(nums[mid]>nums[end]){
            start = mid + 1
        }else{
            end = mid;
        }
    }
    return nums[start]
}

console.log(rotatedSortedArray([3,4,5,1,2]))