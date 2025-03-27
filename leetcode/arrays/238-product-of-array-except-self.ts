//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

function productExceptSelf(nums: number[]) {
  const answer = Array(nums.length).fill(1)
  let leftProduct = 1
  let rightProduct = 1
  
  for (let i = 0; i < answer.length; i++) {
    answer[i] = leftProduct;
    leftProduct = leftProduct * nums[i]
  }

  for (let i = answer.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct
    rightProduct = rightProduct * nums[i]
  }

  return answer
}

const sol = productExceptSelf([1, 2, 3, 4])
console.log("ans in function call", sol)