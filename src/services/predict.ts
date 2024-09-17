import { post } from "@/lib/api/api";
import { PREDICT_URL } from "./consts";
import { PredictFormValues } from "@/components/dashboard/predict/usePredictForm";
import { Predict } from "@/types/predict";

export const createPredict = async (data: PredictFormValues) => {
  return await post<Predict>({
    url: PREDICT_URL,
    params: data,
  });
};
