export function bySquaringRecursive2(a, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return bySquaringRecursive2(a * a, n / 2);
  } else {
    return a * bySquaringRecursive2(a * a, (n - 1) / 2);
  }
}

export function bySquaringRecursive2BigInt(a, n) {
  if (n === 0) {
    return 1n;
  } else if (n % 2 === 0) {
    return bySquaringRecursive2BigInt(a * a, n / 2);
  } else {
    return a * bySquaringRecursive2BigInt(a * a, (n - 1) / 2);
  }
}
