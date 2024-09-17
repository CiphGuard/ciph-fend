import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { DEFAULT_ERROR } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { createPredict } from "@/services/predict";
import { Predict, PredictType } from "@/types/predict.d";
import { usePredictStore } from "@/store/usePredictStore";
import {
  trojanPredictFormValues,
  randomValuesPredictForm,
  ransomwarePredictFormValues,
  benignPredictFormValues,
  spywarePredictFormValues,
} from "@/mocks/predictChart";

const INT_VALIDATION = z
  .string({ message: "Campo obligatorio" })
  .regex(/^[0-9]\d*$/, {
    message: "El valor debe ser un entero igual o mayor a 0",
  })
  .transform((value) => {
    if (value === "") return null;
    return parseInt(value);
  });

const FLOAT_VALIDATION = z
  .string({ message: "Campo obligatorio" })
  .regex(/^[0-9]\d*(\.\d+)?$/, {
    message: "El valor debe ser igual o mayor a 0",
  })
  .transform((value) => {
    if (value === "") return null;
    return parseFloat(value);
  });

export interface PredictFormValues {
  pslist_nproc?: string | null;
  pslist_nppid?: string | null;
  pslist_avg_threads?: string | null;
  pslist_avg_handlers?: string | null;
  dlllist_ndlls?: string | null;
  dlllist_avg_dlls_per_proc?: string | null;
  handles_nhandles?: string | null;
  handles_avg_handles_per_proc?: string | null;
  handles_nfile?: string | null;
  handles_nevent?: string | null;
  handles_ndesktop?: string | null;
  handles_nkey?: string | null;
  handles_nthread?: string | null;
  handles_ndirectory?: string | null;
  handles_nsemaphore?: string | null;
  handles_ntimer?: string | null;
  handles_nsection?: string | null;
  handles_nmutant?: string | null;
  ldrmodules_not_in_load?: string | null;
  ldrmodules_not_in_init?: string | null;
  ldrmodules_not_in_mem?: string | null;
  ldrmodules_not_in_load_avg?: string | null;
  ldrmodules_not_in_init_avg?: string | null;
  ldrmodules_not_in_mem_avg?: string | null;
  malfind_ninjections?: string | null;
  malfind_commitCharge?: string | null;
  malfind_protection?: string | null;
  malfind_uniqueInjections?: string | null;
  psxview_not_in_pslist?: string | null;
  psxview_not_in_eprocess_pool?: string | null;
  psxview_not_in_ethread_pool?: string | null;
  psxview_not_in_pspcid_list?: string | null;
  psxview_not_in_csrss_handles?: string | null;
  psxview_not_in_session?: string | null;
  psxview_not_in_deskthrd?: string | null;
  psxview_not_in_pslist_false_avg?: string | null;
  psxview_not_in_eprocess_pool_false_avg?: string | null;
  psxview_not_in_ethread_pool_false_avg?: string | null;
  psxview_not_in_pspcid_list_false_avg?: string | null;
  psxview_not_in_csrss_handles_false_avg?: string | null;
  psxview_not_in_session_false_avg?: string | null;
  psxview_not_in_deskthrd_false_avg?: string | null;
  modules_nmodules?: string | null;
  svcscan_nservices?: string | null;
  svcscan_kernel_drivers?: string | null;
  svcscan_fs_drivers?: string | null;
  svcscan_process_services?: string | null;
  svcscan_shared_process_services?: string | null;
  svcscan_nactive?: string | null;
  callbacks_ncallbacks?: string | null;
  callbacks_nanonymous?: string | null;
  callbacks_ngeneric?: string | null;
}

const formSchema = z.object({
  pslist_nproc: INT_VALIDATION,
  pslist_nppid: INT_VALIDATION,
  pslist_avg_threads: FLOAT_VALIDATION,
  pslist_avg_handlers: FLOAT_VALIDATION,
  dlllist_ndlls: INT_VALIDATION,
  dlllist_avg_dlls_per_proc: FLOAT_VALIDATION,
  handles_nhandles: INT_VALIDATION,
  handles_avg_handles_per_proc: FLOAT_VALIDATION,
  handles_nfile: INT_VALIDATION,
  handles_nevent: INT_VALIDATION,
  handles_ndesktop: INT_VALIDATION,
  handles_nkey: INT_VALIDATION,
  handles_nthread: INT_VALIDATION,
  handles_ndirectory: INT_VALIDATION,
  handles_nsemaphore: INT_VALIDATION,
  handles_ntimer: INT_VALIDATION,
  handles_nsection: INT_VALIDATION,
  handles_nmutant: INT_VALIDATION,
  ldrmodules_not_in_load: INT_VALIDATION,
  ldrmodules_not_in_init: INT_VALIDATION,
  ldrmodules_not_in_mem: INT_VALIDATION,
  ldrmodules_not_in_load_avg: FLOAT_VALIDATION,
  ldrmodules_not_in_init_avg: FLOAT_VALIDATION,
  ldrmodules_not_in_mem_avg: FLOAT_VALIDATION,
  malfind_ninjections: INT_VALIDATION,
  malfind_commitCharge: INT_VALIDATION,
  malfind_protection: INT_VALIDATION,
  malfind_uniqueInjections: FLOAT_VALIDATION,
  psxview_not_in_pslist: INT_VALIDATION,
  psxview_not_in_eprocess_pool: INT_VALIDATION,
  psxview_not_in_ethread_pool: INT_VALIDATION,
  psxview_not_in_pspcid_list: INT_VALIDATION,
  psxview_not_in_csrss_handles: INT_VALIDATION,
  psxview_not_in_session: INT_VALIDATION,
  psxview_not_in_deskthrd: INT_VALIDATION,
  psxview_not_in_pslist_false_avg: FLOAT_VALIDATION,
  psxview_not_in_eprocess_pool_false_avg: FLOAT_VALIDATION,
  psxview_not_in_ethread_pool_false_avg: FLOAT_VALIDATION,
  psxview_not_in_pspcid_list_false_avg: FLOAT_VALIDATION,
  psxview_not_in_csrss_handles_false_avg: FLOAT_VALIDATION,
  psxview_not_in_session_false_avg: FLOAT_VALIDATION,
  psxview_not_in_deskthrd_false_avg: FLOAT_VALIDATION,
  modules_nmodules: INT_VALIDATION,
  svcscan_nservices: INT_VALIDATION,
  svcscan_kernel_drivers: INT_VALIDATION,
  svcscan_fs_drivers: INT_VALIDATION,
  svcscan_process_services: INT_VALIDATION,
  svcscan_shared_process_services: INT_VALIDATION,
  svcscan_nactive: INT_VALIDATION,
  callbacks_ncallbacks: INT_VALIDATION,
  callbacks_nanonymous: INT_VALIDATION,
  callbacks_ngeneric: INT_VALIDATION,
});

const formDefaultValues: PredictFormValues = {
  pslist_nproc: "",
  pslist_nppid: "",
  pslist_avg_threads: "",
  pslist_avg_handlers: "",
  dlllist_ndlls: "",
  dlllist_avg_dlls_per_proc: "",
  handles_nhandles: "",
  handles_avg_handles_per_proc: "",
  handles_nfile: "",
  handles_nevent: "",
  handles_ndesktop: "",
  handles_nkey: "",
  handles_nthread: "",
  handles_ndirectory: "",
  handles_nsemaphore: "",
  handles_ntimer: "",
  handles_nsection: "",
  handles_nmutant: "",
  ldrmodules_not_in_load: "",
  ldrmodules_not_in_init: "",
  ldrmodules_not_in_mem: "",
  ldrmodules_not_in_load_avg: "",
  ldrmodules_not_in_init_avg: "",
  ldrmodules_not_in_mem_avg: "",
  malfind_ninjections: "",
  malfind_commitCharge: "",
  malfind_protection: "",
  malfind_uniqueInjections: "",
  psxview_not_in_pslist: "",
  psxview_not_in_eprocess_pool: "",
  psxview_not_in_ethread_pool: "",
  psxview_not_in_pspcid_list: "",
  psxview_not_in_csrss_handles: "",
  psxview_not_in_session: "",
  psxview_not_in_deskthrd: "",
  psxview_not_in_pslist_false_avg: "",
  psxview_not_in_eprocess_pool_false_avg: "",
  psxview_not_in_ethread_pool_false_avg: "",
  psxview_not_in_pspcid_list_false_avg: "",
  psxview_not_in_csrss_handles_false_avg: "",
  psxview_not_in_session_false_avg: "",
  psxview_not_in_deskthrd_false_avg: "",
  modules_nmodules: "",
  svcscan_nservices: "",
  svcscan_kernel_drivers: "",
  svcscan_fs_drivers: "",
  svcscan_process_services: "",
  svcscan_shared_process_services: "",
  svcscan_nactive: "",
  callbacks_ncallbacks: "",
  callbacks_nanonymous: "",
  callbacks_ngeneric: "",
};

export default function usePredictForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { setPredictions } = usePredictStore();

  const form = useForm<PredictFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    reValidateMode: "onChange",
  });

  const fillFormWithRandomValues = (min: number, max: number) => {
    const randomValues = randomValuesPredictForm(min, max);
    form.reset(randomValues);
  };

  const fillFormWithExampleValues = (category: PredictType) => {
    let exampleValues = {};
    if (category == PredictType.BENIGN) exampleValues = benignPredictFormValues;
    if (category == PredictType.RANSOMWARE)
      exampleValues = ransomwarePredictFormValues;
    if (category == PredictType.SPYWARE)
      exampleValues = spywarePredictFormValues;
    if (category == PredictType.TROJAN) exampleValues = trojanPredictFormValues;

    form.reset(exampleValues);
  };

  const onSubmit = (values: PredictFormValues) => {
    setIsLoading(true);

    createPredict(values)
      .then((response: Predict) => {
        setPredictions(response);
        toast({
          description: "Resultado de ataque predecido correctamente",
        });
        form.reset(formDefaultValues);
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
    fillFormWithRandomValues,
    fillFormWithExampleValues,
  };
}
