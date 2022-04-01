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

//By doing below assignements I am connecting nodes together as below
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


function dfs(root){
    if(root == null) return [];
    let stack = [root];
    let result = [];
    while(stack.length>0){
        let current = stack.pop();
        result.push(current.val);
        if(current.right){
            stack.push(current.right)
        }
        if(current.left){
            stack.push(current.left)
        }
    }
    return result
}

console.log(dfs(a))
