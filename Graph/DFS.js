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

const dfsRecursive = (graph,source) => {
   console.log(source)
   for(let neighbor of graph[source]){
    dfsRecursive(graph,neighbor)
   }

}

console.log(depthFirst(graph,'a')) //abdfce

console.log(dfsRecursive(graph,'a')) 