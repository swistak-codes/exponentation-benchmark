export function byDefinitionTail(a, n, acc = 1) {
  if (n === 0) {
    return acc;
  } else {
    return byDefinitionTail(a, n - 1, acc * a);
  }
}

export function byDefinitionTailBigInt(a, n, acc = 1n) {
  if (n === 0) {
    return acc;
  } else {
    return byDefinitionTailBigInt(a, n - 1, acc * a);
  }
}
