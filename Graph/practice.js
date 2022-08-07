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

//console.log(hasPath(graph,'a','e'))


//un directed Graph

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

//building Adjeceny List

function buildGraph(edges){
let graph = {}

    for(let edge of edges){
        let [a,b] =edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);

    }
    return graph
}

//console.log(buildGraph(edges))

let graph1 = {
    i: [ 'j', 'k' ],
    j: [ 'i' ],
    k: [ 'i', 'm', 'l' ],
    m: [ 'k' ],
    l: [ 'k' ],
    o: [ 'n' ],
    n: [ 'o' ]
  }

function hasPath(graph,src,dest,visited){
        if(src == dest)   return true;

        if(visited.has(src)) return false;

        visited.add(src)

        for(let neighbour of graph[src]){
            if(hasPath(graph,neighbour,dest,visited)===true){
                return true
            }
        }
}


let visited = new Set();

console.log(hasPath(graph1,'k','0',visited))