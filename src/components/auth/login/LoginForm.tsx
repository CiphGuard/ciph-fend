"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormInput, FormButton } from "@/components/ui/form";
import { TypographyMuted } from "@/components/ui/typography";

import Link from "next/link";

import useLoginForm from "./useLoginForm";
import { RECUPERAR_CONTRASENA_PATH, REGISTRARSE_PATH } from "@/lib/utils";

export default function LoginForm() {
  const { form, isLoading, onSubmit } = useLoginForm();
  const {
    formState: { isValid },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FormInput
            form={form}
            name="username"
            label="Nombre de usuario"
            placeholder="Usuario"
          />
          <div className="pt-2">
            <FormInput
              form={form}
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
            />
          </div>
          <TypographyMuted className="text-right pt-5">
            <Link
              href={RECUPERAR_CONTRASENA_PATH}
              className="font-medium underline decoration-1 text-black"
              style={{ textUnderlineOffset: "0.2em" }}
            >
              Olvidé mi contraseña
            </Link>
          </TypographyMuted>
        </CardContent>
        <CardFooter className="block">
          <FormButton
            text="Iniciar sesión"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            className="w-full"
          />
          <TypographyMuted className="text-center pt-5">
            ¿No tienes una cuenta?{" "}
            <Link
              href={REGISTRARSE_PATH}
              className="font-medium underline decoration-1 text-black"
              style={{ textUnderlineOffset: "0.2em" }}
            >
              Registrarse
            </Link>
          </TypographyMuted>
        </CardFooter>
      </form>
    </Form>
  );
}
