class Node{
    constructor(node){
        this.val = node;
        this.left=null;
        this.right=null;
    }
}

const a =new Node('a')
const b = new Node('b')
const c = new Node('c')

a.left = b
a.right = c

function isSame(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    let left = (p.left,q.left);
    let right = (p.right,q.right)
    return left&&right;
}

console.log(isSame(a,a));