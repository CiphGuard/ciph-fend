import { RecoverPassword } from "@/components/auth/recover-password";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Recuperar contraseña | ${APP_NAME}`,
  description: "Recuperar contraseña",
};

export default function RecuperarContrasenaPage() {
  return <RecoverPassword />;
}
