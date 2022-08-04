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
        let nextelment = current.next;
        current.next = pre;
        pre = current;
        current = nextelment;
    }
    console.log(d.next)
}

//Recursive Function

function recurRev(head ,pre = null){
    if(head === null) return head;
    let next = head.next;
    head.next = pre;

    return recurRev(next,)
}
console.log(recurRev(a))