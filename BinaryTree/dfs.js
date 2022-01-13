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

//constructiing below TreeW
//        a
//      /   \
//     b     c
//    / \      \
//   d    e      f

a.left = b;
a.right = c;
b.left = d;
b.right= e;
c.right= f;

function dfs(root){
    if(root==null) return [];
    let stack = [root];
    let result=[];
    while(stack.length>0){
        const current = stack.pop();
        result.push(current.val);
        if(current.right){
            stack.push(current.right)
        }
        if(current.left){
            stack.push(current.left)
        }

    }

    return result;
}

console.log(dfs(a));


const maxDepth = (root) => {
    let maxDepth =0;
}

// var maxDepth = function(root) {
  
//     if(root === undefined || root===null){
//         return 0;
//     }
//     var left = maxDepth(root.left);
//     var right = maxDepth(root.right);
//     return Math.max(left,right) + 1;
// };