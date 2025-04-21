// Given an array of integers "heights" representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

function largestRectangleArea(heights: number[]) {
  const stack: number[] = []
  let maxArea = 0

  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      //calcuate area
      const topIndex = stack.pop()!
      const height = heights[topIndex]
      const width = i - stack[stack.length - 1] - 1

      const area = height * width
      maxArea = Math.max(maxArea, area)
    }

    stack.push(i)
  }

  return maxArea
}

const n = largestRectangleArea([2, 1, 5, 6, 2, 3])
console.log(n)