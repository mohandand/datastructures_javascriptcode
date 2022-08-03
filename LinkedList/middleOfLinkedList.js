var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast){
        if(!fast.next) return slow
        slow = slow.next;
        fast = fast.next.next
    }   
    return slow
};