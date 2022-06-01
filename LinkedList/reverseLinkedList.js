class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('c');
let d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function revList(head){
    let current = head;
    let pre = null;
    while(current!==null){
        let next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    console.log(d.next.next)
}
console.log(revList(a))