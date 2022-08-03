//https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
   let fast = head;
   let slow = head
   
   while(fast&&fast.next){
       slow = slow.next;
       fast = fast.next.next;
       if(slow==fast){
           break;
       }
   }
   
   if(fast === null || fast.next === null) //somehow there's no cycle so return null
       return null;
   
   slow = head;
   
   while(fast !== slow){
       
       slow = slow.next;
       fast  = fast.next
   }
   
   return slow
};