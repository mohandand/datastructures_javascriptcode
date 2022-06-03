var hasCycle = function(head) {
    let fast  = head;
     
     while(fast && fast.next){
        head = head.next;
         fast = fast.next.next;
         if(fast == head){
             return true;
         }
     }
     return false
 };