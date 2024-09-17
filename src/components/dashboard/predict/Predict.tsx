import { TypographyH3, TypographyP } from "@/components/ui/typography";
import PredictForm from "./PredictForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Predict() {
  const [value, setValue] = useState("item-2");

  return (
    <>
      <TypographyH3>Predecir tipo de ataque</TypographyH3>
      <TypographyP style={{ marginTop: "4px" }}>
        Ingrese los datos solicitados para predecir el tipo de ataque
      </TypographyP>
      <Accordion
        type="single"
        defaultValue="true"
        collapsible
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        className="border px-4 mt-4 rounded-lg"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger>Formulario</AccordionTrigger>
          <AccordionContent className="py-4">
            <PredictForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
