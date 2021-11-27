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

//By doing below assignements i am connecting nodes together
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

const depthFirstvalues = (root) => {
    if(root === null) return [];
    const stack = [root];
    const result = [];
    while(stack.length>0){

        const current = stack.pop();
        console.log(current.val);
        result.push(current.val);
         //Every instance of Node has dot val prpoerty on the inside. 
        //And then from there I need to add this node childerns and we also needs to make sure this childrens exists
        if(current.right)
        stack.push(current.right);
        if(current.left)
        stack.push(current.left);
    }
    return result;

}


console.log(depthFirstvalues(b)); //searching for root



