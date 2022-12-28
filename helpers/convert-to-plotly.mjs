export function convertToPlotly({ results, names }) {
  const x = results.flatMap((x) => x[0]);
  const result = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const y = results.flatMap((x) => x[i + 1]);
    result.push({
      x,
      y,
      name,
      mode: "lines+markers",
    });
  }
  return result;
}
