//Creating claas for bluprint of nodes.

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//by doing below assignements i am connecting nodes together
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

//        a
//      /   \
//     b     c
//    / \      \
//   d    e      f

const treeincludes = (root ,target) => {
    if(root === null)  return Node;

    let queue = [root];

    while(queue.length>0){
        const current = queue.shift();

        if(current.val === target)  
        {
           return true;
        }
        if(current.left !== null) 
        {
            queue.push(current.left)
        }
        if(current.right !== null) 
        {
            queue.push(current.right)
        }
    }
        return false;
}

console.log(treeincludes(a,"f"));