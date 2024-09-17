import { initPredictChart } from "./../mocks/predictChart";
import { Predict, ProbabilityPrediction } from "@/types/predict";
import { create } from "zustand";

export interface PredictStateValues {
  predictions: ProbabilityPrediction | null;
  predictedClass: number | null;
  predictedClassLabel: string | undefined;
  predictedClassIsMalicious: boolean | null;
}

export interface PredictStateActions {
  setPredictions: (predictions: Predict) => void;
  resetState: () => void;
}

interface PredictState extends PredictStateValues, PredictStateActions {}

export const usePredictStore = create<PredictState>((set) => ({
  predictions: null,
  predictedClass: null,
  predictedClassLabel: undefined,
  predictedClassIsMalicious: null,
  setPredictions: (result: Predict) =>
    set({
      predictions: result.predictions,
      predictedClass: result.predicted_class,
      predictedClassLabel: initPredictChart[result.predicted_class].class,
      predictedClassIsMalicious: result.predicted_class !== 0,
    }),
  resetState: () =>
    set({
      predictions: null,
      predictedClass: null,
    }),
}));
