function search(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
};

const binarySln = search([-1,0,3,5,9,12], 9)
console.log(binarySln)