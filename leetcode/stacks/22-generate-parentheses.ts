//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function generateParenthesis(n: number): string[] {
  //for n = 2 => ["()()", "(())"]
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number) {
    if (current.length === n * 2) {
      result.push(current)
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close)
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1)
    }
  }

  backtrack("", 0, 0)
  return result
}
