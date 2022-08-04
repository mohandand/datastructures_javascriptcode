//Source: https://www.youtube.com/watch?v=Lay55DGfyhA

/* 
*/
var sortList = function(head) {
    if(!head || !head.next) return head;
    // splitting the list into two parts recursively
    let mid  = getMid(head);
    let left = sortList(head);
    let right = sortList(mid);       
    return mergeTwoLists(left, right);
};


var getMid = (head) => {
    let slowPtr = head;
    let fastPtr = head.next;
    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
    }
    let temp = slowPtr.next;
    slowPtr.next = null
    return temp;
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let prev = dummy;
    
    while(list1 && list2){
        if(list1.val<=list2.val){
            prev.next = list1;
            prev = list1;
            list1 = list1.next
        }else{
            prev.next = list2;
            prev = list2;
            list2 = list2.next
        }
    }  
    if(!list1) prev.next = list2
    if(!list2) prev.next = list1
    
    return dummy.next
};