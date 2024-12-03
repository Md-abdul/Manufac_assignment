interface CropData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

interface YearlyCropStats {
  year: string;
  maxCrop: string;
  minCrop: string;
}

interface CropAggregate {
  cropName: string;
  avgYield: number;
  avgArea: number;
}
