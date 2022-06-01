class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d  = new Node('D');

a.next = b;
b.next = c;
c.nect = d;

function findVal(head ,target){
    let current = head;
    while(head !== null){
        if(head.val === target){
            return true;
        }
        head =head.next;
    }
    return false
}
console.log(findVal(a,C))