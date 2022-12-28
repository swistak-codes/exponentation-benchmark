export function binary(a, n) {
  let result = 1;
  while (n > 0) {
    if ((n & 1) === 1) {
      result = result * a;
    }
    a = a * a;
    n = n >> 1;
  }
  return result;
}

export function binaryBigInt(a, n) {
  let result = 1n;
  n = BigInt(n);
  while (n > 0) {
    if ((n & 1n) === 1n) {
      result = result * a;
    }
    a = a * a;
    n = n >> 1n;
  }
  return result;
}
