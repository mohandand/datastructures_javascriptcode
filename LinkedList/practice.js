function partsSums(ls) {
  let lsr = [];
let sum = 0;
  for(let i =ls.length-1 ;i>=-1;i--){
     lsr.unshift(sum)
      sum = sum + ls[i]
  }
return lsr;
}
console.log(partsSums([1, 2, 3, 4, 5, 6]))