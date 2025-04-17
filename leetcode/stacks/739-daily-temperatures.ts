function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0)
  
  const stack: number[] = []

  for (let currentDay = 0; currentDay < temperatures.length; currentDay++) {
    const currentTemp = temperatures[currentDay]

    while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
      const previousDay = stack.pop()!
      answer[previousDay] = currentDay - previousDay
    }

    stack.push(currentDay)
  }

  return answer
};

const sl = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(sl)