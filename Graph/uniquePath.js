function numOfPathsToDest(n) {
  // your code goes here
  let matrix = new Array(n);
  
  for(let i = 0; i < matrix.length; i++){
    matrix[i] = new Array(n).fill(0);
  }
  
  //add 1s 1 - bottom row
  for(let i = 0; i < n; i++){
    matrix[0][i] = 1;
  }

  for(let i=1;i<n;i++){
      for(let j=i+1;j<n;j++){
          console.log(i,j)
          console.log(matrix[i-1][j] ,matrix[i][j-1])
          matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
      }
  }

  return matrix;

}
console.log(numOfPathsToDest(6))
