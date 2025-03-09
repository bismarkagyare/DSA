// brute force method

function removeDuplicates(nums: number[]) {
  let uniqueCount = 0;
  let lastUnique = null;
  //let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== lastUnique) {
      uniqueCount++
      lastUnique = nums[i];
    }
  }

  console.log("final array:", nums)

  return uniqueCount;
}

function removeDuplicatesOptimised(nums: number[]) {
  if (nums.length === 0) return 0;

  let lastUniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[lastUniqueIndex]) {
      lastUniqueIndex ++;
      nums[lastUniqueIndex] = nums[i]
    }
  }

  return lastUniqueIndex + 1
}

const res = removeDuplicatesOptimised([1, 2, 3, 3, 4])

console.log(res)