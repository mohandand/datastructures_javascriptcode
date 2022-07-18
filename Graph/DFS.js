const graph = {
    a: ['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

//Iterative Approach
const depthFirst = (graph,source) => {
    const stack = [source];
    while(stack.length>0){
        const current = stack.pop();
        console.log(current)
        for(let neighbor of graph[current]){
         stack.push(neighbor)    
        }
    }

}

//Recursive Approach

const dfsRecursive = (graph,source){
   if(stack.length == 0) return;
   
}

console.log(depthFirst(graph,'a')) //abdfce