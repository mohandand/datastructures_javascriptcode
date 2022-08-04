//https://docs.google.com/document/d/1t2gOBxhpqhnYiNMka6bonzYO7B0DMewHscJ0-XQT0CA/edit

//Check above document before you start doing Graph Problems.


const graph = {
    a: ['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

//Iterative Approach
const bfsIterative = (graph,source) => {
    const queue = [source];
    while(queue.length>0){
        const current = queue.shift();
        console.log(current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)    
        }
    }

}

console.log(bfsIterative(graph,'a')) //acbedf

