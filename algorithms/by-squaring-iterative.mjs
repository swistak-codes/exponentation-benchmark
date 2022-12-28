export function bySquaringIterative(a, n) {
  let result = 1;
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
      a = a * a;
    } else {
      result = result * a;
      a = a * a;
      n = (n - 1) / 2;
    }
  }
  return result;
}

export function bySquaringIterativeBigInt(a, n) {
  let result = 1n;
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
      a = a * a;
    } else {
      result = result * a;
      a = a * a;
      n = (n - 1) / 2;
    }
  }
  return result;
}
