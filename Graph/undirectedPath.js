const unDirectedGraph = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges)
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
}

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]
console.log(unDirectedGraph(edges,'j','m'))