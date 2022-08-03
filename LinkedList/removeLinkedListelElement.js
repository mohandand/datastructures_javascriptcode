/* 
https://leetcode.com/problems/remove-linked-list-elements/
-> we have to create a dummy node and set to previous and head to current
   -> And set dummy.next as head node 
   -> we will have two pointers prev = dummy and current = head 
   -> travers the list and check current.val is equal to the value which we need to delete then 
       ->if above is true then set prev.next= current.next and increment current 
        ->else increment prev = current and currnet  = current.next
    ->dummy.next is head of new list so return it
    */

    var removeElements = function(head, val) {
        let dummy = new ListNode(-1);
        dummy.next = head;
        let prev = dummy;
        let cur = head;
        while(cur){
            if(cur.val === val){
                prev.next = cur.next;
                cur = cur.next
            }else{
                prev = cur;
                cur = cur.next
            }
        }
        return dummy.next;
    };

    