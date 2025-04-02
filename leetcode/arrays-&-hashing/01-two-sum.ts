// brute force method
// time complexity is O(n^2)

function twoSumI(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

function twoSumOptimised(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const result = twoSumOptimised([1, 2, 3, 4, 5], 3);
console.log(result);
