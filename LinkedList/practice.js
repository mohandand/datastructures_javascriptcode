var countSubstrings = function(s) {
  let count=0;
  const arr=[];
  for(let i=0;i<s.length;i++){
      countPalindrome(s,i,i); // odd length
      countPalindrome(s,i,i+1); // even length
  }
  return count;
  function countPalindrome(str,left,right){
      while(left>=0 && right<str.length && str[left]===str[right]){
    arr.push(str.substring(left,right+1)); // if you want those substrings as well
          count++;
          left--;
          right++;
      }
  }
};
console.log(countSubstrings("abba"))