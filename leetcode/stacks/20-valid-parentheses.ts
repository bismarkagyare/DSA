// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
  const stack: string[] = [];

  // use a Set to identify opening brackets quickly
  const openBrackets = new Set(['(', '{', '[']);

  // map for matching closing brackets with their opening counterparts
  const bracketMap: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (openBrackets.has(char)) {
      stack.push(char)
    } else {
      const top = stack.pop()
      if (top !== bracketMap[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}

const stackSln = isValid("()[")
console.log(stackSln)
