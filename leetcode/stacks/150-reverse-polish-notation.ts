//You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

//Evaluate the expression. Return an integer that represents the value of the expression.

function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  const operators = new Set(["+", "-", "*", "/"])

  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number(token))
    } else {
      const b = stack.pop()!
      const a = stack.pop()!

      let result: number;

      switch (token) {
        case "+":
          result = a + b
          break
        case "-": 
          result = a - b
          break
        case "*": 
          result = a * b
          break
        case "/": 
          result = Math.trunc(a / b)
        default:
          throw new Error("unknown operator")
      }

      stack.push(result)
    }

  }

  return stack.pop()!

}

const evalSln = evalRPN(["2", "1", "+", "3", "*"])
console.log(evalSln)

