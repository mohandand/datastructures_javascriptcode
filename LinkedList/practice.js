class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b;

function printLinkedList(head){
  current = head;
  while(current!==null){
    console.log(current.val);
    current = current.next;
  }
}

function hasCycle(head){
  let fast = head;
  while(fast && fast.next){
    head = head.next;
    fast = fast.next.next
    if(head === fast){
      return true;
    }
  }
  return false
}

//console.log(printLinkedList(a))

console.log(hasCycle(a))