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

// function dfs(root){
//     if(root === null) return [];
//     let stack = [root];
//     let res=[];
//     while(stack.length>0){
//         var current = stack.pop();
//         res.push(current.val);
//         if(current.right){
//             stack.push(current.right);
//         }
//         if(current.left){
//             stack.push(current.left);
//         }
//     }

//     return res;

// }

let res = [];
function recurDFS(root){
    if(root === null) return [];
    res.push(root.val)
    let leftval = recurDFS(root.left);
    let rightval = recurDFS(root.right);
    return res;
}

console.log(recurDFS(a));