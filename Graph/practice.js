const graph = {
    a: ['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};


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

const bredthFirst = (graph,source) => {
    const queue = [source];

    while(queue.length>0){
        let current  = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
             queue.push(neighbour)
        }
    }
}


function hasPath(graph,src,dest){
    if(src === dest) return true;

    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dest) === true){
            return true;
        }
    }
}





//console.log(depthFirst(graph,'a'))

//console.log(bredthFirst(graph,'a'))

console.log(hasPath(graph,'a','e'))