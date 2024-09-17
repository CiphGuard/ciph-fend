"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH4, TypographyMuted } from "@/components/ui/typography";
import RecoverPasswordForm from "./RecoverPasswordForm";
import { Suspense, useState } from "react";
import Link from "next/link";
import { LOGIN_PATH } from "@/lib/utils";

export default function RecoverPassword() {
  const [submitted, setSubmitted] = useState(false);

  const successHeader = (
    <>
      <CardTitle>Revisa tu correo</CardTitle>
      <CardDescription>
        Te hemos enviado un enlace de restablecimiento de contraseña a tu correo
        electrónico
      </CardDescription>
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

  const recoverPasswordHeader = (
    <>
      <CardTitle>Recuperar contraseña</CardTitle>
      <CardDescription>
        Rellena el formulario para restablecer tu contraseña
      </CardDescription>
    </>
  );

  return (
    <>
      <CardHeader>
        <TypographyH4 className="text-center mb-3">CiphraGuard 🤖</TypographyH4>
        {submitted ? successHeader : recoverPasswordHeader}
      </CardHeader>
      {!submitted && (
        <Suspense>
          <RecoverPasswordForm submitted={setSubmitted} />
        </Suspense>
      )}
    </>
  );
}
