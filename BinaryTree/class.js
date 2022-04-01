class Node{
    constuctor(val){
        this.node=val;
        this.left=null;
        this.right=null
    }
}

const a = new Node('a');
const b = new  Node('b');
const c = new Node('c');

a.left = b
a.right =c

console.log(a.left)