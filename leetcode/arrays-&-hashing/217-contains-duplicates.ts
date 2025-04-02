//brute force approach : time complexity of O(n^2)

function containsDuplicate(nums: number[]) {
  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

// using hashmaps: time complexity of O(N)
function containsDuplicateOptimised(nums: number[]) {
  if (nums.length === 0) return false;

  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }

  return false;
}

