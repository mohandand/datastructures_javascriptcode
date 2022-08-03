class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function getNodeVal(head ,index){
    let count = 0;
    let current =head;
    while(current!==null){
        if(index == count){
            return current.val;
        }
        current = current.next;
        count++;
    }
}

function recGetNode(head,inde){
    if(head === null) return null;
    if(inde == 0) return head.val;
    return recGetNode(head.next,inde-1)
}
console.log(recGetNode(a,2))