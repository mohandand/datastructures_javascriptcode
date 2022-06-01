class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

let a = new Node('1');
let b = new Node('2');
let c = new Node('3');
let d = new Node('4');

a.next = b;
b.next = c;
c.next = d;

function printList(node){
  while(node!== null){
    console.log(node.val);
    node = node.next;
  }
}

console.log(printList(a))