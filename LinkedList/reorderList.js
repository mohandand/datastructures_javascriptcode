/* You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Sol: push all values into stack

Then
*/

function reorderList(head){
    const stack = [];

    let tempHead = head;

    while (tempHead) {
        stack.push(tempHead);
        
        tempHead = tempHead.next;
    }

    let start = 0;
    let end = stack.length - 1;
    let first = true;

    while (start < end) {        
        if (first) {
            stack[end].next = null;
            stack[start].next = stack[end];
            first = false;
            start++;
        } else {
            stack[start].next = null;
            stack[end].next = stack[start];
            first = true;
            end--;
        }
    }
};
//Approach-2
var reorderList = function (head) {
    //using the 2 pointers method, loop through the LL till slow get to the midpoint, then set its next node to be the head of the second list
    let [slow, fast] = [head, head.next];
    //when this loop exits slow will be at half of the list
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    //now that slow is at the midpoint, split the LL in half by having 'second' be the head of the second list and make slow point to null as next so that becomes the end of the first list 
    let second = slow.next;
    slow.next = null;
  
    //reverse the second list
      let prev = null
      while (second) {
          let temp = second.next;
          second.next = prev;
          prev = second;
          second = temp;
    }
  
    //merge the two LL
    let first = head;
    second = prev;
    while (second) {
      let [temp1, temp2] = [first.next, second.next];
      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
    }
  };