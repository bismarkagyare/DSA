function carFleet(target: number, position: number[], speed: number[]): number {
  const stack: number[] = []

  const cars = position.map((pos, i) => ({ position: pos, speed: speed[i] }));
  const sortedCars = cars.sort((a, b) => b.position - a.position);

  for (let car of sortedCars) {
    const time = (target - car.position) / car.speed

    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time)
    }
  }

  return stack.length
}

const sn = carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
console.log(sn);
