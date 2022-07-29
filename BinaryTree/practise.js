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

function bfs(root){
    if(root==null) return []
    let queue = [root];
    let result=[];
    while(queue.length>0){
        let current = queue.shift();
        result.push(current.val);
        if(current.left !==null) queue.push(current.left);
        if(current.right !==null) queue.push(current.right);
       
    }
    return result;


}

function dfsRecu(root){
    if(root===null) return [];
    console.log(root.val)
    let left = dfsRecu(root.left)
    let right= dfsRecu(root.right)
}
console.log(dfsRecu(a))