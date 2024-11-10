import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { setAuthTokenToCookie } from "@/lib/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithEmailAndPassword } from "@/services/auth";
import { getUser } from "@/services/user";
import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/auth";
import { useToast } from "@/components/ui/use-toast";
import { DEFAULT_ERROR, RESPONSE } from "@/lib/utils";

export interface LoginFormValues {
  username: string;
  password: string;
}

const formSchema = z.object({
  username: z.string().min(3, { message: "El nombre de usuario es muy corto" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
});

const formDefaultValues: LoginFormValues = {
  username: "",
  password: "",
};

export default function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useAuthStore((state) => ({
    setUser: state.setUser,
  }));
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (values: LoginFormValues) => {
    setIsLoading(true);

    signInWithEmailAndPassword(values)
      .then((res) => {
        form.reset();
        setAuthTokenToCookie(res);

        getUser(res.access).then((res) => {
          setUser(res.data as User);
        });

        if (searchParams.has("next")) {
          router.push(searchParams.get("next") as unknown as string);
        } else {
          router.refresh();
        }

        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido de vuelta",
        });
      })
      .catch((err) => {
        if (
          err.response?.data &&
          (err.response.status === RESPONSE.bad_request || err.response.status === RESPONSE.unauthorized)
        ) {
          form.setError("password", {
            type: "manual",
            message: "Usuario o contraseña incorrectos",
          });
        } else {
          toast({
            variant: "destructive",
            title: DEFAULT_ERROR.header,
            description: DEFAULT_ERROR.server,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    form,
    isLoading,
    onSubmit,
  };
}
