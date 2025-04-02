// Given an array of integers numbers that is sorted in non-decreasing order.

//Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

function twoSum(numbers: number[], target: number) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

const twoSumSol = twoSum([2,7,11,15], 9)
console.log(twoSumSol)