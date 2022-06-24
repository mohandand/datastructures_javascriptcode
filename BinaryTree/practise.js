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

function dfs(root){
    if(root === null) return [];
    let stack = [root];
    let res=[];
    while(stack.length>0){
        var current = stack.pop();
        res.push(current.val);
        if(current.right){
            stack.push(current.right);
        }
        if(current.left){
            stack.push(current.left);
        }
    }

    return res;

}

let res = [];
function recurDFS(root){
    if(root === null) return [];
    res.push(root.val)
    let leftval = recurDFS(root.left);
    let rightval = recurDFS(root.right);
    return res;
}


function bfs(root){
    if(root==null) return [];
    let queue = [root];
    let res = [];
     while(queue.length>0){
        let current = queue.shift();
        res.push(current.val);
        if(current.left){
            queue.push(current.left);
        }
        if(current.right){
            queue.push(current.right);
        }
     }
return res;
}

//https://www.youtube.com/watch?v=o4YXgRgmmxw

function bfsRecursive(root){
    let out = [];
    function bfs(root,level){
    if(root===null) return [];
    
    if(out[level]){
        out[level].push(root.val)
    }else{
        out[level] = [root.val]
    }

    bfs(root.left,level+1);
    bfs(root.right,level+1);
}

bfs(root,0);
return out;
 
}

var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left,right) + 1;
};


console.log(maxDepth(a))