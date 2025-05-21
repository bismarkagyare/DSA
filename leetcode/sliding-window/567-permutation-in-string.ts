//Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

function checkInclusion(s1: string, s2?: string) {
  const left = 0
  const frequencyObj: Record<string, number> = {}

  for (let right = 0; right < s1.length; right++) {
    const char = s1[right]
    frequencyObj[char] = (frequencyObj[char] || 0) + 1
  }

};

const perm = checkInclusion("aabbccc")
console.log(perm)


