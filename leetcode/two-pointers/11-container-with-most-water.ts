//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

//Find two lines that together with the x-axis form a container, such that the container contains the most water.

//Return the maximum amount of water a container can store.

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const result = width * minHeight;

    max = Math.max(max, result)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }

  }

  return max;
}

const maxAreaSol = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(maxAreaSol);
