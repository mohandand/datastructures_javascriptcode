class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const a = new Node('3');
const b = new Node('9');
const c = new Node('20');
const d = new Node('7');
const e = new Node('15');
//By doing below assignements I am connecting nodes together as below
a.left = b;
a.right = c;
c.left = d;
c.right = e;


var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left,right) + 1;
};


console.log(maxDepth(a))