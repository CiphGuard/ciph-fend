import { RestorePassword } from "@/components/auth/restore-password";
import { APP_NAME, LOGIN_PATH } from "@/lib/utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `Restablecer contraseña | ${APP_NAME}`,
  description: "Restablecer contraseña",
};

interface Props {
  searchParams: {
    token?: string;
    uid?: string;
  };
}

export default function RestablecerContrasenaPage({ searchParams }: Props) {
  if (searchParams.token && searchParams.uid) {
    return <RestorePassword />;
  } else {
    redirect(LOGIN_PATH);
  }
}
