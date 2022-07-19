const shortestPath = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges)
    const queue = [[nodeA,0]]
    const visited = new Set();
    while(queue.length>0){
        const [node,distance] = queue.shift();
        if(node===nodeB) return distance;

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor,distance+1]);
            }
        }

    }
    return -1
}

const buildGraph = (edges) => {
    const graph2 = {};

    for(let edge of edges){
        const [a,b] = edge
        if(!(a in graph2)) graph2[a] = [];
        if(!(b in graph2)) graph2[b] = [];
        graph2[a].push(b);
        graph2[b].push(a);
    }
    return graph2;
}

const graph1 = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]
console.log(shortestPath(graph1,'w','z'))