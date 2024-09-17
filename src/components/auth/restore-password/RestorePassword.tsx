"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH4, TypographyMuted } from "@/components/ui/typography";
import RestorePasswordForm from "./RestorePasswordForm";
import { Suspense, useState } from "react";
import Link from "next/link";
import { LOGIN_PATH } from "@/lib/utils";

export default function RestorePassword() {
  const [submitted, setSubmitted] = useState(false);

  const successHeader = (
    <>
      <CardTitle>Cambio de contraseña</CardTitle>
      <CardDescription>¡Tu contraseña fue restablecida con éxito!</CardDescription>
      <TypographyMuted className="pt-3">
        <Link
          href={LOGIN_PATH}
          className="font-medium underline decoration-1 text-black"
          style={{ textUnderlineOffset: "0.2em" }}
        >
          Volver al inicio de sesión
        </Link>
      </TypographyMuted>
    </>
  );

  const restorePasswordHeader = (
    <>
      <CardTitle>Cambiar contraseña</CardTitle>
      <CardDescription>
        Rellene el formulario para restablecer su contraseña
      </CardDescription>
    </>
  );

  return (
    <>
      <CardHeader>
        <TypographyH4 className="text-center mb-3">CiphraGuard 🤖</TypographyH4>
        {submitted ? successHeader : restorePasswordHeader}
      </CardHeader>
      {!submitted && (
        <Suspense>
          <RestorePasswordForm submitted={setSubmitted} />
        </Suspense>
      )}
    </>
  );
}
