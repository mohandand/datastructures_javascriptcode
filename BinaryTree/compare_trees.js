class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a =new Node('a');
const b = new Node('b');
const c = new Node('c');


a.left = b;
a.right = c;


const isSameTree = (p, q) => {
    // if both are null then the y are equal
    if (!p && !q) return true
    // if one of them is null and the other not
    if (!p || !q) return false
    // if the values of the nodes are not the same
    if (p.val !== q.val) return false;
    
    // otherwise return recursively the right nodes & left nodes
    let right = isSameTree(p.right,q.right)
    let left  = isSameTree(p.left,q.left)
    return  right && left 
};

console.log(isSameTree(a,a))


//Iterartive

var isSameeTree = function(p, q) {
    return recursive(p, q);
    return iterative(p, q);  
};

function iterative(p, q) {
    const queue = [p, q];
    while (queue.length) {
        const node1 = queue.shift();
        const node2 = queue.shift();
        if (!node1 && !node2) {
            continue;
        }
        if ((!node1 && node2) || (node1 && !node2) || node1.val !== node2.val) {
            return false
        }
        queue.push(node1.left);
        queue.push(node2.left);
        queue.push(node1.right);
        queue.push(node2.right);   
    } 
     return true;   
}