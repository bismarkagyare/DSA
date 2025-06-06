//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

//Return the length of the longest substring containing the same letter you can get after performing the above operations.

function characterReplacement(s: string, k: number): number {
  const count: Record<string, number> = {};
  let left = 0;
  let maxLength = 0;
  let maxCharCount = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    count[char] = (count[char] || 0) + 1;

    maxCharCount = Math.max(maxCharCount, count[char]);

    const windowSize = right - left + 1;

    if (windowSize - maxCharCount > k) {
      const leftChar = s[left];
      count[leftChar]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
const longest = characterReplacement("AABABBA", 1);
console.log(longest);
