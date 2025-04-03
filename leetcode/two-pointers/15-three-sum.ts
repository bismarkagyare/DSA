// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

//The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

function threeSum(nums: number[]) {
  const sortedArr = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];

      if (sum === 0) {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        left++;
        right--;

        while (left < right && sortedArr[left] === sortedArr[left - 1]) {
          left++;
        }
        while (left < right && sortedArr[right] === sortedArr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const threeSumSol = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(threeSumSol);
