export function byDefinitionIterative(a, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * a;
  }
  return result;
}

export function byDefinitionIterativeBigInt(a, n) {
  let result = 1n;
  for (let i = 0; i < n; i++) {
    result = result * a;
  }
  return result;
}
