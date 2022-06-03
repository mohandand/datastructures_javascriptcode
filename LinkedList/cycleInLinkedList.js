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

 /* follow up question : If you want to find length of cycle then stop fast pointer once it find the cycle then move slow
 pointer and maintian counter untill it reaches fast pointer. */