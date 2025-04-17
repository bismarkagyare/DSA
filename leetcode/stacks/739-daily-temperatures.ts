//You are given an array of integers temperatures that represents the daily temperatures.

//Return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.

//If there is no future day for which this is possible, set answer[i] = 0.

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