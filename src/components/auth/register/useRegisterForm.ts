import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { DEFAULT_ERROR, LOGIN_PATH } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/user";

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}

const formSchema = z.object({
  username: z.string().min(3, { message: "El nombre de usuario es muy corto" }),
  email: z.string().email({ message: "El email no es válido" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
});

const formDefaultValues: RegisterFormValues = {
  username: "",
  email: "",
  password: "",
};

export default function useRegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (values: RegisterFormValues) => {
    setIsLoading(true);

    registerUser(values)
      .then(() => {
        form.reset();
        toast({
          description: "Usuario registrado correctamente",
        });
        push(LOGIN_PATH);
      })
      .catch((err) => {
        const description = err.response?.data.error;
        toast({
          variant: "destructive",
          title: DEFAULT_ERROR.header,
          description: description || DEFAULT_ERROR.server,
        });
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
