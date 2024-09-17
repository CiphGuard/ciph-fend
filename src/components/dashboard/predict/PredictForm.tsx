"use client";

import { Form, FormButton, FormInput } from "@/components/ui/form";
import usePredictForm from "./usePredictForm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { PredictType } from "@/types/predict.d";

export default function PredictForm() {
  const {
    form,
    isLoading,
    onSubmit,
    fillFormWithRandomValues,
    fillFormWithExampleValues,
  } = usePredictForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid phone-xl:grid-cols-2 gap-3">
          <FormInput
            form={form}
            name="pslist_nproc"
            label="Número de procesos"
            type="number"
          />
          <FormInput
            form={form}
            name="pslist_nppid"
            label="Número de procesos padre"
            type="number"
          />
          <FormInput
            form={form}
            name="pslist_avg_threads"
            label="Promedio de hilos por proceso"
            type="number"
          />
          <FormInput
            form={form}
            name="pslist_avg_handlers"
            label="Promedio de manejadores por proceso"
            type="number"
          />
          <FormInput
            form={form}
            name="dlllist_ndlls"
            label="Número de DLLs"
            type="number"
          />
          <FormInput
            form={form}
            name="dlllist_avg_dlls_per_proc"
            label="Promedio de DLLs por proceso"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nhandles"
            label="Número de manejadores"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_avg_handles_per_proc"
            label="Promedio de manejadores por proceso"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nfile"
            label="Número de archivos"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nevent"
            label="Número de eventos"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_ndesktop"
            label="Número de escritorios"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nkey"
            label="Número de claves"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nthread"
            label="Número de hilos"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_ndirectory"
            label="Número de directorios"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nsemaphore"
            label="Número de semáforos"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_ntimer"
            label="Número de temporizadores"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nsection"
            label="Número de secciones"
            type="number"
          />
          <FormInput
            form={form}
            name="handles_nmutant"
            label="Número de mutantes"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_load"
            label="Módulos no cargados"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_init"
            label="Módulos no inicializados"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_mem"
            label="Módulos no en memoria"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_load_avg"
            label="Promedio de módulos no cargados"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_init_avg"
            label="Promedio de módulos no inicializados"
            type="number"
          />
          <FormInput
            form={form}
            name="ldrmodules_not_in_mem_avg"
            label="Promedio de módulos no en memoria"
            type="number"
          />
          <FormInput
            form={form}
            name="malfind_ninjections"
            label="Número de inyecciones"
            type="number"
          />
          <FormInput
            form={form}
            name="malfind_commitCharge"
            label="Carga comprometida"
            type="number"
          />
          <FormInput
            form={form}
            name="malfind_protection"
            label="Protección"
            type="number"
          />
          <FormInput
            form={form}
            name="malfind_uniqueInjections"
            label="Inyecciones únicas"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_pslist"
            label="Procesos ocultos (no en la lista)"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_eprocess_pool"
            label="No en el pool de EProcess"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_ethread_pool"
            label="No en el pool de EThread"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_pspcid_list"
            label="No en la lista de PSPCID"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_csrss_handles"
            label="No en los manejadores de CSRSS"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_session"
            label="No en la sesión"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_deskthrd"
            label="No en hilos de escritorio"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_pslist_false_avg"
            label="Promedio de falsos procesos ocultos"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_eprocess_pool_false_avg"
            label="Promedio falso en el pool de EProcess"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_ethread_pool_false_avg"
            label="Promedio falso en el pool de EThread"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_pspcid_list_false_avg"
            label="Promedio falso en la lista PSPCID"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_csrss_handles_false_avg"
            label="Promedio falso en CSRSS"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_session_false_avg"
            label="Promedio falso en la sesión"
            type="number"
          />
          <FormInput
            form={form}
            name="psxview_not_in_deskthrd_false_avg"
            label="Promedio falso en hilos de escritorio"
            type="number"
          />
          <FormInput
            form={form}
            name="modules_nmodules"
            label="Número de módulos"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_nservices"
            label="Número de servicios"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_kernel_drivers"
            label="Controladores del kernel"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_fs_drivers"
            label="Controladores del sistema de archivos"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_process_services"
            label="Servicios de procesos"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_shared_process_services"
            label="Servicios de procesos compartidos"
            type="number"
          />
          <FormInput
            form={form}
            name="svcscan_nactive"
            label="Número de servicios activos"
            type="number"
          />
          <FormInput
            form={form}
            name="callbacks_ncallbacks"
            label="Número de callbacks"
            type="number"
          />
          <FormInput
            form={form}
            name="callbacks_nanonymous"
            label="Número de callbacks anónimos"
            type="number"
          />
          <FormInput
            form={form}
            name="callbacks_ngeneric"
            label="Número de callbacks genéricos"
            type="number"
          />
        </div>
        <div className="pt-3 gap-3 flex flex-col phone-xl:flex-row phone-xl:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Llenar con valores predefinidos
                <ChevronDownIcon width={16} height={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[85vw] phone-xl:min-w-[17rem]">
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  fillFormWithRandomValues(1, 200);
                }}
              >
                Valores aleatorios
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  fillFormWithExampleValues(PredictType.BENIGN);
                }}
              >
                Petición no maliciosa
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  fillFormWithExampleValues(PredictType.RANSOMWARE);
                }}
              >
                Ransomware
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  fillFormWithExampleValues(PredictType.SPYWARE);
                }}
              >
                Spyware
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  fillFormWithExampleValues(PredictType.TROJAN);
                }}
              >
                Troyano
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <FormButton
            text="Predecir ataque"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
      </form>
    </Form>
  );
}
