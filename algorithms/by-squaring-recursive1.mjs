export function bySquaringRecursive1(a, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return bySquaringRecursive1(a * a, n / 2);
  } else {
    return a * bySquaringRecursive1(a, n - 1);
  }
}

export function bySquaringRecursive1BigInt(a, n) {
  if (n === 0) {
    return 1n;
  } else if (n % 2 === 0) {
    return bySquaringRecursive1BigInt(a * a, n / 2);
  } else {
    return a * bySquaringRecursive1BigInt(a, n - 1);
  }
}
