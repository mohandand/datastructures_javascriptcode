function scramble(str1, str2) {
  let obj1={}
  let obj2 = {}
  for(let char of str1){
    obj1[char]?obj1[char]++:obj1[char]=1
  }
  console.log(obj1)
   for(let char of str2){
     obj2[char]?obj2[char]++:obj2[char]=1
   }
   console.log(obj2)
   for(item in obj2){
     if(!(obj2[item] == obj1[item])){
        return false
        }
   }
   return true
 }
 
 
 console.log(scramble("rkqodlw" ,"world"))