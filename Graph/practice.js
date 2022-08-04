const graph = {
    a:[b,c],
    b:[d],
    c:[e],
    d:[f]
}

function dfs(graph,source){
    let stack = [source];

    while(stack.length>0){
        let current = stack.pop();
        console.log(current);

        for(let neighbour of graph[current]){
            stack.push(neighbour)
        }
    }

}

console.log(dfs(graph,a))