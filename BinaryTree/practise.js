class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left=b
a.right=c
b.left=d
b.right=e
c.right=f

function dfs(root){
    if(root == null) return [];
    let stack=[root];
    let res=[];
    while(stack.length>0){
        let current = stack.pop();
        res.push(current.val)
        if(current.right !==null) stack.push(current.right)
        if(current.left !==null) stack.push(current.left)
    }
    return res
}
console.log(dfs(a))