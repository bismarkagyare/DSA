// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  //create hashmaps to count frequencies
  const sMap = new Map<string, number>()
  const tMap = new Map<string, number>()

  //count characters in s string
  for (let char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1)
  }

  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1)
  }

  //compare the two hashmaps
  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false // frequencies do not match
    }
  }

  return true
}

// const solution = isAnagram("silent", "jentsi")
// console.log(solution)
