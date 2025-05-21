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

};

const perm = checkInclusion("ab", "eidbaooo")
console.log(perm)


