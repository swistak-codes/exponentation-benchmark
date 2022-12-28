export function byDefinitionRecursive(a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * byDefinitionRecursive(a, n - 1);
  }
}

export function byDefinitionRecursiveBigInt(a, n) {
  if (n === 0) {
    return 1n;
  } else {
    return a * byDefinitionRecursiveBigInt(a, n - 1);
  }
}
