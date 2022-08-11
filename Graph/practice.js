
/* 
Declare a variable for our current overall maximum sum
Declare a temporary sum for comparison
Iterate over nums starting at nums[1] since we set our initial sums to nums[0]
The temporary sum is either the current number if the prior tempSum was negative for example
Or it is the sum of tempSum and the new sum if that figure is larger 
Every time we have a new tempSum we want to compare it to our running maxSum 
 */

var maxSubArray = function(nums) {
    let maxSum = nums[0];   
	let sum = nums[0];
	for(let i=1; i< nums.length; i++){   // start with 2nd element.
		sum = Math.max(nums[i], nums[i]+sum);
		if(sum > maxSum) maxSum = sum;
	}
	return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))