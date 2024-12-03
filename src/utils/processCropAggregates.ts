function processCropAggregates(data: CropData[]): CropAggregate[] {
  const cropStats: Record<string,
    { totalYield: number; totalArea: number; count: number }
  > = {};

  data.forEach((crop) => {
    const cropName = crop["Crop Name"];
    const yieldValue =
      parseFloat(
        crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as string
      ) || 0;
    const area =
      parseFloat(crop["Area Under Cultivation (UOM:Ha(Hectares))"] as string) ||
      0;

    if (!cropStats[cropName]) {
      cropStats[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    cropStats[cropName].totalYield += yieldValue;
    cropStats[cropName].totalArea += area;
    cropStats[cropName].count += 1;
  });

  return Object.entries(cropStats).map(([cropName, stats]) => ({
    cropName,
    avgYield: parseFloat((stats.totalYield / stats.count).toFixed(3)),
    avgArea: parseFloat((stats.totalArea / stats.count).toFixed(3)),
  }));
}
export default processCropAggregates;
