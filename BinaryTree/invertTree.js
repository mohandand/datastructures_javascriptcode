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




//DFS

function invertDFS(root){
    let stack = [root]
    while(stack.length>0){
        let current = stack.pop();
        if(current!=null){
            [current.left,current.right] = [current.right,current.left]
            stack.push[current.left,current.right]
        }
        return root;

    }
}

//BFS

function invertTreeBFS(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
  }

  //Recursive

  function invertTree1(node) {
    if (node !== null) {
        const tmp = node.left;
        node.left = invertTree1(node.right);
        node.right = invertTree1(tmp);
    }
    return node;
};

// Recursion -2
function invertTree2(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree2(root.right), invertTree2(root.left)];
    return root;
  }

  console.log(invertTree2(a))