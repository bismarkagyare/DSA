// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Bucket sort approach will be the most optimal
// create a hashmap to count frequencies


function topKFrequent(nums: number[], k?: number) {
  const frequencyMap = new Map()

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }

  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => [])

  console.log(buckets)

  return frequencyMap
}

const solu = topKFrequent([1, 2, 2, 2, 3, 3, 4])
console.log("frequencyMap", solu)
console.log(solu.entries())
console.log(solu.values())