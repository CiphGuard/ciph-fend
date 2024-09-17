import { Login } from "@/components/auth";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Iniciar sesión | ${APP_NAME}`,
  description: "Iniciar sesión",
};

export default function IniciarSesionPage() {
  return <Login />;
}
