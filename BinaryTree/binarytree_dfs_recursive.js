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

//DFS

let res = [];

const depthFirstvalues = (root) => {
    if(root === null) return [];
    res.push(root.val);
    const leftvalues =  depthFirstvalues(root.left);//[b,d,e]
    const rightvalues = depthFirstvalues(root.right); //[c,f]
    // return [root.val, ...leftvalues, ...rightvalues];
    return res;
}
console.log(depthFirstvalues(a));
