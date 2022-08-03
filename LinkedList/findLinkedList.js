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
c.next = d;

function findVal(head ,target){
    while(head !== null){
        if(head.val === target){
            return true;
        }
        head =head.next;
    }
    return false
}

function recursiveFind(head ,target){
    if(head === null) return false;
    if(head.val == target) return true;
    recursiveFind(head.next,target)
}

console.log(recursiveFind(a,"C"))