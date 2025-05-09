function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let maxLength = 0
  const seen = new Set<string>()

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right]

    //if the char is found, its a duplicate and we shrink the window
    while(seen.has(currentChar)) {
      seen.delete(s[left])
      left++
    }

    seen.add(currentChar)

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
};

const sub = lengthOfLongestSubstring("abcabcbb")
console.log(sub)