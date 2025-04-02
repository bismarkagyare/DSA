//Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s: string) {
  const convertedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0
  let right = convertedStr.length - 1

  while (left < right) {
    if (convertedStr[left] !== convertedStr[right]) {
      return false
    } else {
      left++
      right--
    }
  }

  return true
}

const m = isPalindrome("sase")
console.log(m)