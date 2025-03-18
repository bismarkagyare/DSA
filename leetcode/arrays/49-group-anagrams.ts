// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//Input: strs = ["eat","tea","tan","ate","nat","bat"]

//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs: string[]) : string[][] {
  const hashMap = new Map<string, string[]>();

  for (let word of strs) {
    const key = word.split("").sort().join("");

    //check if the key exists
    if (hashMap.has(key)) {
      // if the key exists, push the current word into the existing arr
      hashMap.get(key)?.push(word);
    } else {
      hashMap.set(key, [word]);
    }
  }

  return Array.from(hashMap.values());
}

const solution = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(solution);
