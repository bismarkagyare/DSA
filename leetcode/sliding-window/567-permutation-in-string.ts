//Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

function checkInclusion(s1: string, s2: string) {
  if (s1.length > s2.length) return false

  const s1Map = new Map<string, number>()
  const windowMap = new Map<string, number>()

  //frequency map for s1
  for (const char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1)
  }

  let left = 0

  for (let right = 0; right < s2.length; right++) {
    const currentChar = s2[right]
    windowMap.set(currentChar, (windowMap.get(currentChar) || 0) + 1)

    if (right - left + 1 > s1.length) {
      const leftChar = s2[left]
      const count = windowMap.get(leftChar)

      if (count === 1) {
        windowMap.delete(leftChar)
      } else {
        windowMap.set(leftChar, count! - 1)
      }

      left++
    }

    if (right - left + 1 === s1.length && isEqualMap(s1Map, windowMap)) {
      return true
    }
  }

  return false

};



const perm = checkInclusion("ab", "eidbaooo")
console.log(perm)


