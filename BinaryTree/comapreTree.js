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
    let left = isSame(p.left,q.left);
    let right = isSame(p.right,q.right)
    return left&&right;
}

function isSameRec(p,q){
    let queue = [p,q];
    while(queue.length>0){
        let node1 = queue.shift();
        let node2 = queue.shift();

        if(!node1 && !node2){
            continue;
        }

        if((!node1 || !node2) && node1 !== node2){
            return false;
        }
        queue.push(node1.left)
        queue.push(node2.left)
        queue.push(node1.right)
        queue.push(node2.left)
    }
    return true
}



console.log(isSameRec(a,a));