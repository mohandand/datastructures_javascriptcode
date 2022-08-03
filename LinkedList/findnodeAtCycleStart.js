//Approach: two pointer (fast and slow pointer)
//it is linked list problem
//similar concept to detecting the cycle
//but after we find the cycle, as floyd says
//move back the slow pointer to the beginning 
//and then move slow and fast 1x speed
//whereever fast and slow meet then, will be beginning of the loop

var detectCycle = function(head) {
    if(head === null || head.next === null)
        return null;
    
    let slow = head;
    let fast = head;
    
    //detect cycle
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow)
            break;
    }
    
    if(fast === null || fast.next === null) //somehow there's no cycle so return null
        return null;
    
    //beginning of cycle detection
    slow = head;
    while(slow != fast){
        fast = fast.next;
        slow = slow.next;
    }
    
    return slow;
};