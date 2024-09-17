import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography";
import RegisterForm from "./RegisterForm";
import { Suspense } from "react";

export default function Register() {
  return (
    <>
      <CardHeader>
        <TypographyH4 className="text-center mb-3">CiphraGuard 🤖</TypographyH4>
        <CardTitle>Registrarme</CardTitle>
        <CardDescription>
          Crea tu cuenta para acceder a la mejor aplicación de predicción de
          ataques cibernéticos
        </CardDescription>
      </CardHeader>
      <Suspense>
        <RegisterForm />
      </Suspense>
    </>
  );
}
