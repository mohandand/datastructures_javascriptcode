var productExceptSelf = function(nums) {
  let mul = 1;
  let mulr = 1;
  
  let lefta = [];
  let righta = [];
  
  for(let i=0;i<nums.length;i++){
      lefta[i] =mul;
      mul = mul*nums[i];
  }
  console.log(lefta)
  for(let i=nums.length-1;i>=0;i--){
      righta[i] = mulr;
      mulr = mulr*nums[i]
      righta[i] =righta[i] * lefta[i];
  }
  
  return righta
  
};

console.log(productExceptSelf([1,2,3,4]))