//question: https://leetcode.com/problems/intersection-of-two-linked-lists/

/* Explanation : what I'm doing is traversing the 1st linkedLists and while traversing multiplying each 
node value with -1 . then again traversing 2nd list and when I get the first negative node value adding 
a pointer to it, next again traversing the 1st list and multiplying it with -1 again so that the structure of
 the list doesn't change and returning the pointer . (the pointer will be the head for the intersection)
Simple easy peasy */

var getIntersectionNode = function(headA, headB) {
    let current = headA;
     
     while(current){
       current.val  = current.val * - 1 
         current = current.next
     }
    current = headB;
     let temp=null;
     while(current){
       if(current.val < 0){
             temp = current;
             break;
         }
         current = current.next
        
     }
     current = headA;
     
     while(current){
              current.val  = current.val * - 1 
         current = current.next
     }
     
     return temp;
     
 };