//You are given an m x n integer matrix matrix with the following two properties:

//Each row is sorted in non-decreasing order.
//The first integer of each row is greater than the last integer of the previous row.
//Given an integer target, return true if target is in matrix or false otherwise.

//You must write a solution in O(log(m * n)) time complexity.

function searchMatrix(matrix: number[][], target: number): boolean{
  let result: number[] = []

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result.push(matrix[row][col])
    }
  }

  let start = 0
  let end = result.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (result[mid] === target) return true
    else if (result[mid] < target) start = mid + 1
    else end = mid - 1
  }

  return false
};

const z = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 23)
console.log(z)