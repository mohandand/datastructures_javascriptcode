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
  let counter =0
  let fast = head;
  while(fast && fast.next){
    head = head.next;
    fast = fast.next.next
    if(head === fast){
      head = head.next;
      while(head!==fast){
        counter++
        head = head.next;
      }
      return counter
    }
  }
  return false
}

function hasCycle1(head){
    let slow = head;
    let fast =head;
    while(fast && fast.next){
      slow = slow.next
      fast =fast.next.next;
      if(slow == fast){
        return true
      }
    }
    return false;
}

//console.log(printLinkedList(a))

function palindrome(head){
  let slow =head;
  let fast = head;
  let stack = []
  while(fast){
    if(!fast.next){
      slow=slow.next;
      break;
    }
    stack.push(slow.val);
    slow =slow.next;
    fast = fast.next.next
  }
  
  while(slow){
    if(slow.val!==stack.pop()){
      return false
    }
    slow = slow.next;
  }
return true;
}

function revList(head){
  let current =head;
  let pre =null;
  while(current){
    let nextele = current.next;
    current.next = pre;
    pre = current;
    current = nextele;
  }
}


function sumOfLinkedList(head){
  let sum =0; 
  while(head){
      sum = sum + head.val;
      head = head.next;
   }
}


function MergeList(list1,list2){
    let dummy = new Node(-1);
    let prev = dummy;
    while(list1 & list2){
      if(list1.val<list2.val){
        prev.next=list1;
        prev=list1;
        list1 =list1.next
      }else{
        prev.next = list2;
        prev = list2;
        list2 =list2.next;
      }
    }
    
}

function removeElements(head,k){
  let dummy = new Node(-1);
  let prev =dummy
   let current =head;

   while(current){
    if(current.val == k){
      prev.next = current.next;
      prev=current;
      current = current.next;
    }
    else{
      prev =current;
      current = current.next
    }
   }

}

function removenthElment(head,n){

  let dummy = new Node(-1);
   dummy.next = head;
   let prev = dummy;
   let tail = head;
   let current = head;
   while(tail<n){
    tail = tail.next;
   }

   while(tail!==null){
    prev=prev.next;
    current = current.next
   }

   prev.next = current.next;

   return dummy.next;
}

console.log(hasCycle1(a));