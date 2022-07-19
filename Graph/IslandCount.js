const islandCount = (grid) => {
    let visited  =new Set();
    let count=0;
 //loop through grid
 for(let row=0;row<grid.length;row++){
    for(let col = 0;col<grid[0].length;col++){
        if(explore(grid,row,col,visited) === true){
            count = count+1
        };
    }
 }
 return count;
}

const explore = (grid,r,c,visited) => {
 const rowInbounds = 0<=r && r<grid.length;
 const colInbounds = 0<=c && c<grid.length;
 if(!rowInbounds || !colInbounds) return false;

 if(grid[r][c] == 'w') return false
 
   const pos = r + ',' + c;
   if(visited.has(pos)) return false;
   visited.add(pos);

   explore(grid,r-1,c,visited)
   explore(grid,r+1,c,visited)
   explore(grid,r,c-1,visited)
   explore(grid,r,c+1,visited)
   return true;
}

const grid = [
    ['w','l','w','w','w'],
    ['w','l','w','w','w'],
    ['w','w','w','l','w'],
    ['w','w','l','l','w'],  
    ['l','w','w','l','l'],
    ['l','l','w','w','w'],
]

console.log(islandCount(grid))