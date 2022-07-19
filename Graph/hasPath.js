//DFS Solution
function hasPath(graph,src,des){
    if(src===des) return true;

    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,des) === true){
            return true;
        }
    }
   return false;
}

//BFS Iterative Soultion
function hasPathBFS(graph,src,des){
    const queue = [src];
    while(queue>0){
        let current = queue.shift();
        if(current === des) return true
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false;
}

