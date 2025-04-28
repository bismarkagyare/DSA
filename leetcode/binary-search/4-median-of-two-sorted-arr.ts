function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const merged = [...nums1, ...nums2]
  let left = 0
  let right = merged.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    
  }
  return merged
};

const r = findMedianSortedArrays([1, 2, 3], [4, 5])
console.log(r)