function processYearlyStats(data: CropData[]): YearlyCropStats[] {
  const yearlyStats: YearlyCropStats[] = [];

  const groupedByYear = data.reduce((acc, item) => {
    const year = item.Year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, CropData[]>);

  for (const year in groupedByYear) {
    const crops = groupedByYear[year];
    let maxCrop = { name: "", production: -Infinity };
    let minCrop = { name: "", production: Infinity };

    crops.forEach((crop) => {
      const production =
        parseFloat(crop["Crop Production (UOM:t(Tonnes))"] as string) || 0;
      if (production > maxCrop.production) {
        maxCrop = { name: crop["Crop Name"], production };
      }
      if (production < minCrop.production) {
        minCrop = { name: crop["Crop Name"], production };
      }
    });

    yearlyStats.push({
      year,
      maxCrop: maxCrop.name,
      minCrop: minCrop.name,
    });
  }

  return yearlyStats;
}
export default processYearlyStats;
