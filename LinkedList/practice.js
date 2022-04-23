var setZeroes = function (matrix) {
  let index = []
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] == 0) {
        index.push([r, c])
      }
    }
  }
  for (let address of index) {
    let row = address[0]
    let col = address[1]
    fix(row, col, matrix)
  }
  return matrix
};

const fix = (r, c, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0
  }
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[r][i] = 0
  }
}