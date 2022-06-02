//Source: https://www.youtube.com/watch?v=LBD8rIjVxZI

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(2);
let d = new Node(1);

a.next = b;
b.next = c;
c.next = d;

function palindrome(head){
    let slow =head;
    let fast = head;
    let stack = [];
    //Storing half of the values in stack
    while(fast){
        //if number of nodes are odd then ignore middle
        if(!fast.next){
            slow= slow.next;
            break;
        }
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    //now comapre remaining elements from stack
    while(slow){
        if(stack.pop()!==slow.val) return false;
        slow=slow.next;
    }
    return true
}

console.log(palindrome(a))