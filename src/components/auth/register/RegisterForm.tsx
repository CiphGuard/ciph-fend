"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormInput, FormButton } from "@/components/ui/form";
import { TypographyMuted } from "@/components/ui/typography";

import Link from "next/link";

import useRegisterForm from "./useRegisterForm";
import { LOGIN_PATH } from "@/lib/utils";

export default function RegisterForm() {
  const { form, isLoading, onSubmit } = useRegisterForm();
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
            description="Usarás este nombre para iniciar sesión"
          />
          <div className="pt-2">
            <FormInput
              form={form}
              name="email"
              label="Correo electrónico"
              placeholder="Email"
              type="email"
              description="Este correo será usado para recuperar tu cuenta"
            />
          </div>
          <div className="pt-2">
            <FormInput
              form={form}
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter className="block">
          <FormButton
            text="Registrarme"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            className="w-full"
          />
          <TypographyMuted className="text-center pt-5">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href={LOGIN_PATH}
              className="font-medium underline decoration-1 text-black"
              style={{ textUnderlineOffset: "0.2em" }}
            >
              Iniciar sesión
            </Link>
          </TypographyMuted>
        </CardFooter>
      </form>
    </Form>
  );
}
