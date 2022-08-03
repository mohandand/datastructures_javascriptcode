class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = b;


var hasCycle = function(head) {
    let fast  = head;
    let slow  = head
     while(fast && fast.next){
        slow = slow.next;
         fast = fast.next.next;
         if(fast == slow){
             return true;
         }
     }
     return false
 };

 console.log(hasCycle(a))

 /* follow up question : If you want to find length of cycle then stop fast pointer once it find the cycle then move slow
 pointer and maintian counter untill it reaches fast pointer. */