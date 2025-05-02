function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const merged = [...nums1, ...nums2]
  merged.sort((a, b) => a - b)

  const n = merged.length

  if (n % 2 !== 0) {
    //the length is odd
    return merged[Math.floor(n / 2)]
  } else {
    //the length is even
    const mid1 = n / 2 - 1
    const mid2 = n / 2
    return (merged[mid1] + merged[mid2]) / 2
  }
};

const r = findMedianSortedArrays([1, 2, 3], [4, 5, 6])
console.log(r)