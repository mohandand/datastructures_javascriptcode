/*
Question: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
source: https://www.youtube.com/watch?v=M0CLi1HwpvM

 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let resultHead = dummy;
    let count = 0;
    let tail = head;
    while(count<n){
        count++;
        tail = tail.next;
    }
    
    let prev = dummy;
    let rn = head;
    
    while(tail){
        tail =tail.next;
         rn = rn.next;
        prev = prev.next;
       
       }
    prev.next =rn.next;
    
    return resultHead.next;
};