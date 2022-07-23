const minimumislandCount = (grid) => {
    let visited  =new Set();
    let minSize=Infinity;
 //loop through grid
 for(let row=0;row<grid.length;row++){
    for(let col = 0;col<grid[0].length;col++){
       let size = explore(grid,row,col,visited)
       if(size>0 && size<minSize){
        minSize=size;
       }
    }
 }
 return minSize;
}

const explore = (grid,r,c,visited) => {
 const rowInbounds = 0<=r && r<grid.length;
 const colInbounds = 0<=c && c<grid.length;
 if(!rowInbounds || !colInbounds) return 0;

 if(grid[r][c] == 'w') return 0;
 
   const pos = r + ',' + c;
   if(visited.has(pos)) return 0;
   visited.add(pos);
    let size=1
   size += explore(grid,r-1,c,visited)
   size += explore(grid,r+1,c,visited)
   size += explore(grid,r,c-1,visited)
   size += explore(grid,r,c+1,visited)
   return size;
}

const grid = [
    ['w','l','w','w','w'],
    ['w','l','w','w','w'],
    ['w','w','w','l','w'],
    ['w','w','l','l','w'],  
    ['l','w','w','l','l'],
    ['l','l','w','w','w'],
]

console.log(minimumislandCount(grid))

