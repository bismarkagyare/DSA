function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    let hours = 0;
    const k = Math.floor((left + right) / 2);

    for (const p of piles) {
      hours += Math.ceil(p / k);
    }

    if (hours <= h) {
      res = k
      right = k - 1
    } else {
      left = k + 1
    }
  }

  return res;
}

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const koko = minEatingSpeed([3, 6, 7, 11], 8);
console.log(koko);
