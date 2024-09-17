"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormButton,
  FormInput,
} from "@/components/ui/form";
import { TypographyMuted } from "@/components/ui/typography";
import Link from "next/link";
import useRecoverPasswordForm from "./useRecoverPasswordForm";
import { LOGIN_PATH } from "@/lib/utils";

interface Props {
  submitted: (value: boolean) => void;
}

export default function RecoverPasswordForm({ submitted }: Props) {
  const { form, isLoading, onSubmit } = useRecoverPasswordForm({ submitted });

  const {
    formState: { isValid },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FormInput
            form={form}
            name="email"
            label="Correo electrónico"
            placeholder="Email"
          />
          <TypographyMuted className="text-right pt-5">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href={LOGIN_PATH}
              className="font-medium text-black underline decoration-1"
              style={{ textUnderlineOffset: "0.2em" }}
            >
              Iniciar sesión
            </Link>
          </TypographyMuted>
        </CardContent>
        <CardFooter>
          <FormButton
            text="Recuperar contraseña"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            className="w-full"
          />
        </CardFooter>
      </form>
    </Form>
  );
}
