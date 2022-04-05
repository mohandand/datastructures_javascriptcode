function scramble(str1, str2) {
  for(let char of str2){
    if(!str2.includes(char)){
      return false
    }
  }
   return true
 }
 
 console.log(scramble("abc" ,"abca"))