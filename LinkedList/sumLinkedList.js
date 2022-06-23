class Node{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
const a  = new Node(2)
const b  = new Node(3)
const c  = new Node(2)
const d  = new Node(3)

a.next = b;
b.next = c
c.next = d


function sumOfLLValues(head){
    let current = head;
    let sum =0;
    while(current != null){
        sum+=current.val;
        current = current.next;
    }
    return sum;
}


var sum1=0;
function recursiveSum(head){
    if(head == null) return 0;
    return head.val + recursiveSum(head.next)
}
console.log(recursiveSum(a));