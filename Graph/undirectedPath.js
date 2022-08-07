//Stpe-1 Convert Edge List into Adjecncy List
//Step-2 implement haspath by traversing it
//step-3 check for cycle to avoid infinte loop

const unDirectedGraph = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges)
    console.log(graph)
    const visited = new Set();
    return hasPath(graph,nodeA,nodeB,visited );
}

function hasPath(graph,src,des,visited){
 if(src === des) return true;
 if(visited.has(src)) return false;
 visited.add(src);

 for(let neighbor of graph[src]){
    if(hasPath(graph,neighbor,des,visited) === true){
        return true;
    }
 }

}

const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges){
        const [a,b]= edge
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
        }
        return graph
}

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]
console.log(unDirectedGraph(edges,'j','m'))