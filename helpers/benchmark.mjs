import { hrtime } from "node:process";

function removeMaxAndMin(array) {
  let min = null;
  let max = null;
  let minI = null;
  let maxI = null;
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (min === null || val < min) {
      min = val;
      minI = i;
    }
    if (max === null || val > max) {
      max = val;
      maxI = i;
    }
  }

  return array.filter((_, i) => i !== minI && i !== maxI);
}

export function benchmark(functions, inputs, tries) {
  const result = [];
  for (const input of inputs) {
    console.log(input);
    const line = [input];
    const sums = new Map();
    for (let i = 0; i < tries; i++) {
      for (const func of functions) {
        let sum = sums.get(func) || [];
        const startTime = hrtime.bigint();
        func(input);
        const endTime = hrtime.bigint();
        sum.push(endTime - startTime);
        sums.set(func, sum);
      }
    }
    for (const func of functions) {
      const sum = removeMaxAndMin(sums.get(func)).reduce((a, b) => a + b);
      line.push(Number(sum / BigInt(tries - 2)));
    }

    result.push(line);
  }
  return result;
}
