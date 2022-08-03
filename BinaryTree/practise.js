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

//Comapring two trees

function isSame(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    let left = isSame(p.left,q.left)
    let right =isSame(p.right,q.right)
    return left&&right;
}

console.log(dfsRecu(a))

//Comparing Trees Iterative

function isSame(p,q){
    let queue = [p,q];
    while(queue.length>0){
        let node1 = queue[0];
        let node2 = queue[1];
        if(!node1 && !node2){
            continue;
        }
        if(!node1 && node2 || node2 &&!node1 || node1.val !==node2.val){
            return false;
        }

        queue.push(node1.left);
        queue.push(node2.left);
        queue.push(node1.right);
        queue.push(node2.right);
    }
}

//Invert Tree

function invertTree(node){
    let stack = [node]
    while(stack.length>0){
        let current = stack.pop()
        [current.left,current.right] =[current.right,current.left]
        stack.push(current.left,current.right)
      
    }
    return node
}

//Invert Tree BFS

function InvertTreeBFS(node){
    let queue = [node]
while(queue.length>0){
    let current = queue.shift();
    [current.left,current.right] = [current.right,current.left]
    queue.push(current.right,current.left)
}
return node
}