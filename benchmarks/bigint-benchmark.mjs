import { benchmark } from "../helpers/benchmark.mjs";
import { binaryBigInt } from "../algorithms/binary.mjs";
import { builtInBigInt } from "../algorithms/built-in.mjs";
import { byDefinitionRecursiveBigInt } from "../algorithms/by-definition-recursive.mjs";
import { byDefinitionIterativeBigInt } from "../algorithms/by-definition-iterative.mjs";
import { byDefinitionTailBigInt } from "../algorithms/by-definition-tail.mjs";
import { bySquaringRecursive1BigInt } from "../algorithms/by-squaring-recursive1.mjs";
import { bySquaringRecursive2BigInt } from "../algorithms/by-squaring-recursive2.mjs";
import { bySquaringIterativeBigInt } from "../algorithms/by-squaring-iterative.mjs";
import { power2BigInt } from "../algorithms/power2.mjs";

export function bigIntBenchmark(base, max, tries) {
  const functions = [
    (input) => byDefinitionIterativeBigInt(base, input),
    (input) => byDefinitionRecursiveBigInt(base, input),
    (input) => byDefinitionTailBigInt(base, input),
    (input) => bySquaringRecursive1BigInt(base, input),
    (input) => bySquaringRecursive2BigInt(base, input),
    (input) => bySquaringIterativeBigInt(base, input),
    (input) => binaryBigInt(base, input),
    (input) => builtInBigInt(base, input),
    ...(base === 2n ? [(input) => power2BigInt(input)] : []),
  ];

  const names = [
    "Definicja (iteracyjny)",
    "Definicja (rekurencyjny)",
    "Definicja (rek. ogonowa)",
    "Szybkie (rekurencyjne)",
    "Szybkie (rek. z definicji)",
    "Szybkie (iteracyjne)",
    "Szybkie (binarne)",
    "Wbudowane w JS",
    ...(base === 2n ? ["Przesunięcie bitowe"] : []),
  ];

  const inputs = [...Array(max + 1).keys()];
  return { results: benchmark(functions, inputs, tries), names };
}
