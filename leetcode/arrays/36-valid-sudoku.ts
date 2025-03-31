// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//Each row must contain the digits 1-9 without repetition.
//Each column must contain the digits 1-9 without repetition.
//Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

function isValidSudoku(board: string[][]): boolean {
  const rowSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const columnSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let value = board[row][col];
      let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (value === ".") continue;

      if (rowSet[row].has(value) || columnSet[col].has(value) || boxSet[boxIndex].has(value)) {
        return false;
      } else {
        rowSet[row].add(value);
        columnSet[col].add(value);
        boxSet[boxIndex].add(value);
      }
    }
  }

  return true;
}

const s = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
console.log(s);
