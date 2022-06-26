//https://leetcode.com/problems/find-triangular-sum-of-an-array/
function pascalSum(array){
   while(array.length!==1){
    let res=[];
    for(let i=0;i<array.length-1;i++){
        res.push((array[i]+array[i+1])%10)
   }
   array=res;
}
return array;
}

console.log(pascalSum([9,11,13]))