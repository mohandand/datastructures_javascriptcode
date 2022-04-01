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

//By doing below assignements i am connecting nodes together accoringly left and right
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

//BFS

const breadthFirstValues = (root) => {
    if(root === null)  return [];
     const queue = [root];
     const result = [];
     while(queue.length>0){
        //remove front of queue
        const current = queue.shift(); //shift method remove first element of array
        result.push(current.val);
        //then add childrens of current to queue
        if(current.left !== null) 
        {
            queue.push(current.left)
        }
        if(current.right !== null) 
        {
            queue.push(current.right)
        }
     }
     return result;
}
console.log(breadthFirstValues(a));