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

const res = removeDuplicates([1, 1, 2, 3, 3, 4])

console.log(res)