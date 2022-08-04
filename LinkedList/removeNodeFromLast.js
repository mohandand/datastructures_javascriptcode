/*
Question: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
source: https://www.youtube.com/watch?v=M0CLi1HwpvM

lets take tail at head and move n postions

then take prev(as dummy) and rn(removenode as head)  

then move all 3 (tail ,prev ,rn)by one untill tail reaches null

so RN will land exactly where we required node be removed.

just put pre = rn.next

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