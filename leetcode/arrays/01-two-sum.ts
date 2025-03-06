// brute force method
// time complexity is O(n^2)

function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}

const res = twoSum([4, 3, 2], 6)
console.log(res)