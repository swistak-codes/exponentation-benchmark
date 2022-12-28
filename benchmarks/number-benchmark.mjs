import { benchmark } from "../helpers/benchmark.mjs";
import { binary } from "../algorithms/binary.mjs";
import { builtIn } from "../algorithms/built-in.mjs";
import { byDefinitionRecursive } from "../algorithms/by-definition-recursive.mjs";
import { byDefinitionIterative } from "../algorithms/by-definition-iterative.mjs";
import { byDefinitionTail } from "../algorithms/by-definition-tail.mjs";
import { bySquaringRecursive1 } from "../algorithms/by-squaring-recursive1.mjs";
import { bySquaringRecursive2 } from "../algorithms/by-squaring-recursive2.mjs";
import { bySquaringIterative } from "../algorithms/by-squaring-iterative.mjs";
import { power2 } from "../algorithms/power2.mjs";

export function numberBenchmark(base, max, tries) {
  const functions = [
    (input) => byDefinitionIterative(base, input),
    (input) => byDefinitionRecursive(base, input),
    (input) => byDefinitionTail(base, input),
    (input) => bySquaringRecursive1(base, input),
    (input) => bySquaringRecursive2(base, input),
    (input) => bySquaringIterative(base, input),
    (input) => binary(base, input),
    (input) => builtIn(base, input),
    ...(base === 2 ? [(input) => power2(input)] : []),
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
