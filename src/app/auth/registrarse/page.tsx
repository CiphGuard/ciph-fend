import { Register } from "@/components/auth/register";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Registrarse | ${APP_NAME}`,
  description: "Registrarse",
};

export default function RegistrarsePage() {
  return <Register />;
}
