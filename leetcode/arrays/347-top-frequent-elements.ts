// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Bucket sort approach will be the most optimal
// create a hashmap to count frequencies


function topKFrequent(nums: number[], k: number) {
  const frequencyMap = new Map<number, number>()

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }

  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => [])

  for (const [num, freq] of frequencyMap.entries()) {
    buckets[freq].push(num)
  }

  const result: number[] = []

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num)
      if (result.length === k) break;
    }
  }

  return result
}

const solu = topKFrequent([1, 2, 2, 2, 3, 3], 2)
console.log("result: ", solu)
