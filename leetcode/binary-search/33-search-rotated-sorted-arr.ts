function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    const leftSorted = nums[left] <= nums[mid];

    if (leftSorted) {
      const inLeftRange = nums[left] <= target && target <= nums[mid];
      if (inLeftRange) right = mid - 1;
      else left = mid + 1;
    } else {
      const inRightRange = nums[mid] < target && target <= nums[right];
      if (inRightRange) left = mid + 1;
      else right = mid - 1;
    }

  }

  return -1

}


const ans1 = search([4, 5, 6, 7, 0, 1, 2], 2);
console.log(ans1);

  //   if (nums[mid]  === target) {
  //     return mid
  //   } else if (nums[left] <= nums[mid]) {
  //     if (nums[left] <= target && target <= nums[mid]) {
  //       right = mid - 1
  //     } else {
  //       left = mid + 1
  //     }
  //   } else {
  //     if (nums[mid] < target && target <= nums[right]) {
  //       left = mid + 1
  //     } else {
  //       right = mid - 1
  //     }
  //   }
  // }

