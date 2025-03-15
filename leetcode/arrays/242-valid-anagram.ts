// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string) {
  const sMap = new Map()
  const tMap = new Map()

  let sCount = 0
  let tCount = 0

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sCount ++
    } else {
      sMap.set(s[i], 1)
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (tMap.has(t[j])) {
      tCount++
    } else {
      tMap.set(t[j], 1)
    }
  }


  console.log("sMAP: ", sMap)
  console.log("tMAP: ", tMap)
}

const solution = isAnagram("silent", "lentsi")
console.log(solution)
