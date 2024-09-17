"use client";

import { usePredictStore } from "@/store/usePredictStore";
import { LayoutPrimary } from "../layouts";
import { Predict } from "./predict";
import { ResultChart } from "./result-chart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { initPredictChart } from "@/mocks/predictChart";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ExclamationTriangleIcon, LockClosedIcon } from "@radix-ui/react-icons";

export default function Dashboard() {
  const { predictions, predictedClassLabel, predictedClassIsMalicious } =
    usePredictStore();
  const [chartData, setChartData] = useState(initPredictChart);

  useEffect(() => {
    if (predictions == null) setChartData(initPredictChart);
    else
      setChartData([
        {
          class: "Petición no maliciosa",
          probability: predictions.benign,
        },
        { class: "Ransomware", probability: predictions.ransomware },
        { class: "Spyware", probability: predictions.spyware },
        { class: "Troyano", probability: predictions.trojan },
      ]);
  }, [predictions]);

  return (
    <LayoutPrimary>
      <Predict />
      <div className="pt-6 space-y-4">
        {predictions && (
          <>
            {predictedClassIsMalicious ? (
              <Alert className="bg-status-warning/10 border-status-warning">
                <ExclamationTriangleIcon className="w-4 h-4" />
                <AlertTitle>Petición maliciosa!</AlertTitle>
                <AlertDescription>
                  Se identificó que puede estar lidiando con{" "}
                  {predictedClassLabel}. Por favor revise los datos.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="bg-status-normal/10 border-status-normal">
                <LockClosedIcon className="w-4 h-4" />
                <AlertTitle>Petición segura!</AlertTitle>
                <AlertDescription>
                  La petición se identificó como segura. Puede ver el detalle
                  del resultado.
                </AlertDescription>
              </Alert>
            )}
          </>
        )}
        <Accordion type="single" collapsible className="border px-4 rounded-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ver detalle del resultado</AccordionTrigger>
            <AccordionContent>
              <div className="mx-auto phone-xl:max-w-[700px]">
                {predictions ? (
                  <ResultChart chartData={chartData} />
                ) : (
                  <p className="text-center">
                    Aun no se ha realizado ninguna petición.
                  </p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </LayoutPrimary>
  );
}
