import { promises as fs } from "fs";
import { numberBenchmark } from "./benchmarks/number-benchmark.mjs";
import { bigIntBenchmark } from "./benchmarks/bigint-benchmark.mjs";
import { convertToPlotly } from "./helpers/convert-to-plotly.mjs";

const results = [
  { title: "exp3number", ...numberBenchmark(3, 33, 100) },
  { title: "exp3bigint", ...bigIntBenchmark(3n, 1000, 100) },
  { title: "exp2number", ...numberBenchmark(2, 53, 100) },
  { title: "exp2bigint", ...bigIntBenchmark(2n, 1000, 100) },
];

for (const { title, ...result } of results) {
  const plotlyData = convertToPlotly(result);
  await fs.writeFile(title + ".json", JSON.stringify(plotlyData), "utf-8");
}
