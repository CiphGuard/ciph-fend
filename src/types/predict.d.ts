export interface Predict {
  predictions: ProbabilityPrediction;
  predicted_class: number;
}

export interface ProbabilityPrediction {
  benign: number;
  ransomware: number;
  spyware: number;
  trojan: number;
}

export interface PredictChart {
  class: string;
  probability: number | null;
}

export enum PredictType {
  BENIGN = "benign",
  RANSOMWARE = "ransomware",
  SPYWARE = "spyware",
  TROJAN = "trojan",
}
