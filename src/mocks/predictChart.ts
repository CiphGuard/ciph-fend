import { PredictFormValues } from "@/components/dashboard/predict/usePredictForm";
import { getRandomFloat, getRandomInt } from "@/lib/helpers/number";
import { PredictChart } from "@/types/predict";

export const initPredictChart: PredictChart[] = [
  { class: "Petición no maliciosa", probability: null },
  { class: "Ransomware", probability: null },
  { class: "Spyware", probability: null },
  { class: "Troyano", probability: null },
];

export const randomValuesPredictForm = (
  min: number,
  max: number
): PredictFormValues => {
  return {
    pslist_nproc: getRandomInt(min, max).toString(),
    pslist_nppid: getRandomInt(min, max).toString(),
    pslist_avg_threads: getRandomFloat(min, max),
    pslist_avg_handlers: getRandomFloat(min, max),
    dlllist_ndlls: getRandomInt(min, max).toString(),
    dlllist_avg_dlls_per_proc: getRandomFloat(min, max),
    handles_nhandles: getRandomInt(min, max).toString(),
    handles_avg_handles_per_proc: getRandomFloat(min, max),
    handles_nfile: getRandomInt(min, max).toString(),
    handles_nevent: getRandomInt(min, max).toString(),
    handles_ndesktop: getRandomInt(min, max).toString(),
    handles_nkey: getRandomInt(min, max).toString(),
    handles_nthread: getRandomInt(min, max).toString(),
    handles_ndirectory: getRandomInt(min, max).toString(),
    handles_nsemaphore: getRandomInt(min, max).toString(),
    handles_ntimer: getRandomInt(min, max).toString(),
    handles_nsection: getRandomInt(min, max).toString(),
    handles_nmutant: getRandomInt(min, max).toString(),
    ldrmodules_not_in_load: getRandomInt(min, max).toString(),
    ldrmodules_not_in_init: getRandomInt(min, max).toString(),
    ldrmodules_not_in_mem: getRandomInt(min, max).toString(),
    ldrmodules_not_in_load_avg: getRandomFloat(min, max),
    ldrmodules_not_in_init_avg: getRandomFloat(min, max),
    ldrmodules_not_in_mem_avg: getRandomFloat(min, max),
    malfind_ninjections: getRandomInt(min, max).toString(),
    malfind_commitCharge: getRandomInt(min, max).toString(),
    malfind_protection: getRandomInt(min, max).toString(),
    malfind_uniqueInjections: getRandomFloat(min, max),
    psxview_not_in_pslist: getRandomInt(min, max).toString(),
    psxview_not_in_eprocess_pool: getRandomInt(min, max).toString(),
    psxview_not_in_ethread_pool: getRandomInt(min, max).toString(),
    psxview_not_in_pspcid_list: getRandomInt(min, max).toString(),
    psxview_not_in_csrss_handles: getRandomInt(min, max).toString(),
    psxview_not_in_session: getRandomInt(min, max).toString(),
    psxview_not_in_deskthrd: getRandomInt(min, max).toString(),
    psxview_not_in_pslist_false_avg: getRandomFloat(min, max),
    psxview_not_in_eprocess_pool_false_avg: getRandomFloat(min, max),
    psxview_not_in_ethread_pool_false_avg: getRandomFloat(min, max),
    psxview_not_in_pspcid_list_false_avg: getRandomFloat(min, max),
    psxview_not_in_csrss_handles_false_avg: getRandomFloat(min, max),
    psxview_not_in_session_false_avg: getRandomFloat(min, max),
    psxview_not_in_deskthrd_false_avg: getRandomFloat(min, max),
    modules_nmodules: getRandomInt(min, max).toString(),
    svcscan_nservices: getRandomInt(min, max).toString(),
    svcscan_kernel_drivers: getRandomInt(min, max).toString(),
    svcscan_fs_drivers: getRandomInt(min, max).toString(),
    svcscan_process_services: getRandomInt(min, max).toString(),
    svcscan_shared_process_services: getRandomInt(min, max).toString(),
    svcscan_nactive: getRandomInt(min, max).toString(),
    callbacks_ncallbacks: getRandomInt(min, max).toString(),
    callbacks_nanonymous: getRandomInt(min, max).toString(),
    callbacks_ngeneric: getRandomInt(min, max).toString(),
  };
};

export const ransomwarePredictFormValues: PredictFormValues = {
  pslist_nproc: "45",
  pslist_nppid: "17",
  pslist_avg_threads: "10.555556",
  pslist_avg_handlers: "202.844444",
  dlllist_ndlls: "1694",
  dlllist_avg_dlls_per_proc: "38.5",
  handles_nhandles: "9129",
  handles_avg_handles_per_proc: "212.302326",
  handles_nfile: "670",
  handles_nevent: "3161",
  handles_ndesktop: "46",
  handles_nkey: "716",
  handles_nthread: "887",
  handles_ndirectory: "104",
  handles_nsemaphore: "671",
  handles_ntimer: "125",
  handles_nsection: "184",
  handles_nmutant: "257",
  ldrmodules_not_in_load: "53",
  ldrmodules_not_in_init: "95",
  ldrmodules_not_in_mem: "53",
  ldrmodules_not_in_load_avg: "0.030372",
  ldrmodules_not_in_init_avg: "0.054441",
  ldrmodules_not_in_mem_avg: "0.030372",
  malfind_ninjections: "5",
  malfind_commitCharge: "21",
  malfind_protection: "30",
  malfind_uniqueInjections: "1.25",
  psxview_not_in_pslist: "2",
  psxview_not_in_eprocess_pool: "0",
  psxview_not_in_ethread_pool: "3",
  psxview_not_in_pspcid_list: "2",
  psxview_not_in_csrss_handles: "7",
  psxview_not_in_session: "4",
  psxview_not_in_deskthrd: "9",
  psxview_not_in_pslist_false_avg: "0.042553",
  psxview_not_in_eprocess_pool_false_avg: "0.0",
  psxview_not_in_ethread_pool_false_avg: "0.06383",
  psxview_not_in_pspcid_list_false_avg: "0.042553",
  psxview_not_in_csrss_handles_false_avg: "0.148936",
  psxview_not_in_session_false_avg: "0.085106",
  psxview_not_in_deskthrd_false_avg: "0.191489",
  modules_nmodules: "138",
  svcscan_nservices: "389",
  svcscan_kernel_drivers: "221",
  svcscan_fs_drivers: "26",
  svcscan_process_services: "24",
  svcscan_shared_process_services: "116",
  svcscan_nactive: "121",
  callbacks_ncallbacks: "87",
  callbacks_nanonymous: "0",
  callbacks_ngeneric: "8",
};

export const trojanPredictFormValues: PredictFormValues = {
  pslist_nproc: "39",
  pslist_nppid: "15",
  pslist_avg_threads: "11.410256",
  pslist_avg_handlers: "220.589744",
  dlllist_ndlls: "1562",
  dlllist_avg_dlls_per_proc: "40.051282",
  handles_nhandles: "8603",
  handles_avg_handles_per_proc: "220.589744",
  handles_nfile: "646",
  handles_nevent: "3000",
  handles_ndesktop: "42",
  handles_nkey: "654",
  handles_nthread: "829",
  handles_ndirectory: "99",
  handles_nsemaphore: "640",
  handles_ntimer: "120",
  handles_nsection: "176",
  handles_nmutant: "259",
  ldrmodules_not_in_load: "47",
  ldrmodules_not_in_init: "85",
  ldrmodules_not_in_mem: "47",
  ldrmodules_not_in_load_avg: "0.029229",
  ldrmodules_not_in_init_avg: "0.052861",
  ldrmodules_not_in_mem_avg: "0.029229",
  malfind_ninjections: "3",
  malfind_commitCharge: "3",
  malfind_protection: "18",
  malfind_uniqueInjections: "1.0",
  psxview_not_in_pslist: "4",
  psxview_not_in_eprocess_pool: "0",
  psxview_not_in_ethread_pool: "4",
  psxview_not_in_pspcid_list: "4",
  psxview_not_in_csrss_handles: "8",
  psxview_not_in_session: "6",
  psxview_not_in_deskthrd: "10",
  psxview_not_in_pslist_false_avg: "0.093023",
  psxview_not_in_eprocess_pool_false_avg: "0.0",
  psxview_not_in_ethread_pool_false_avg: "0.093023",
  psxview_not_in_pspcid_list_false_avg: "0.093023",
  psxview_not_in_csrss_handles_false_avg: "0.186047",
  psxview_not_in_session_false_avg: "0.139535",
  psxview_not_in_deskthrd_false_avg: "0.232558",
  modules_nmodules: "138",
  svcscan_nservices: "389",
  svcscan_kernel_drivers: "221",
  svcscan_fs_drivers: "26",
  svcscan_process_services: "24",
  svcscan_shared_process_services: "116",
  svcscan_nactive: "122",
  callbacks_ncallbacks: "87",
  callbacks_nanonymous: "0",
  callbacks_ngeneric: "8",
};

export const benignPredictFormValues: PredictFormValues = {
  pslist_nproc: "47",
  pslist_nppid: "19",
  pslist_avg_threads: "11.531915",
  pslist_avg_handlers: "242.234043",
  dlllist_ndlls: "2074",
  dlllist_avg_dlls_per_proc: "44.12766",
  handles_nhandles: "11385",
  handles_avg_handles_per_proc: "242.234043",
  handles_nfile: "840",
  handles_nevent: "3761",
  handles_ndesktop: "51",
  handles_nkey: "1011",
  handles_nthread: "1030",
  handles_ndirectory: "117",
  handles_nsemaphore: "766",
  handles_ntimer: "148",
  handles_nsection: "337",
  handles_nmutant: "394",
  ldrmodules_not_in_load: "77",
  ldrmodules_not_in_init: "123",
  ldrmodules_not_in_mem: "77",
  ldrmodules_not_in_load_avg: "0.036167",
  ldrmodules_not_in_init_avg: "0.057774",
  ldrmodules_not_in_mem_avg: "0.036167",
  malfind_ninjections: "12",
  malfind_commitCharge: "77",
  malfind_protection: "72",
  malfind_uniqueInjections: "1.714286",
  psxview_not_in_pslist: "0",
  psxview_not_in_eprocess_pool: "0",
  psxview_not_in_ethread_pool: "0",
  psxview_not_in_pspcid_list: "0",
  psxview_not_in_csrss_handles: "4",
  psxview_not_in_session: "2",
  psxview_not_in_deskthrd: "6",
  psxview_not_in_pslist_false_avg: "0.0",
  psxview_not_in_eprocess_pool_false_avg: "0.0",
  psxview_not_in_ethread_pool_false_avg: "0.0",
  psxview_not_in_pspcid_list_false_avg: "0.0",
  psxview_not_in_csrss_handles_false_avg: "0.085106",
  psxview_not_in_session_false_avg: "0.042553",
  psxview_not_in_deskthrd_false_avg: "0.12766",
  modules_nmodules: "138",
  svcscan_nservices: "392",
  svcscan_kernel_drivers: "222",
  svcscan_fs_drivers: "26",
  svcscan_process_services: "24",
  svcscan_shared_process_services: "118",
  svcscan_nactive: "122",
  callbacks_ncallbacks: "87",
  callbacks_nanonymous: "0",
  callbacks_ngeneric: "8",
};

export const spywarePredictFormValues: PredictFormValues = {
  pslist_nproc: "37",
  pslist_nppid: "15",
  pslist_avg_threads: "10.16216216",
  pslist_avg_handlers: "214.5675676",
  dlllist_ndlls: "1444",
  dlllist_avg_dlls_per_proc: "39.02702703",
  handles_nhandles: "7939",
  handles_avg_handles_per_proc: "214.5675676",
  handles_nfile: "625",
  handles_nevent: "2806",
  handles_ndesktop: "40",
  handles_nkey: "664",
  handles_nthread: "660",
  handles_ndirectory: "92",
  handles_nsemaphore: "594",
  handles_ntimer: "113",
  handles_nsection: "161",
  handles_nmutant: "230",
  ldrmodules_not_in_load: "42",
  ldrmodules_not_in_init: "78",
  ldrmodules_not_in_mem: "42",
  ldrmodules_not_in_load_avg: "0.028826356",
  ldrmodules_not_in_init_avg: "0.05353466",
  ldrmodules_not_in_mem_avg: "0.028826356",
  malfind_ninjections: "3",
  malfind_commitCharge: "3",
  malfind_protection: "18",
  malfind_uniqueInjections: "1",
  psxview_not_in_pslist: "0",
  psxview_not_in_eprocess_pool: "0",
  psxview_not_in_ethread_pool: "0",
  psxview_not_in_pspcid_list: "0",
  psxview_not_in_csrss_handles: "4",
  psxview_not_in_session: "2",
  psxview_not_in_deskthrd: "6",
  psxview_not_in_pslist_false_avg: "0",
  psxview_not_in_eprocess_pool_false_avg: "0",
  psxview_not_in_ethread_pool_false_avg: "0",
  psxview_not_in_pspcid_list_false_avg: "0",
  psxview_not_in_csrss_handles_false_avg: "0.108108108",
  psxview_not_in_session_false_avg: "0.054054054",
  psxview_not_in_deskthrd_false_avg: "0.162162162",
  modules_nmodules: "138",
  svcscan_nservices: "389",
  svcscan_kernel_drivers: "221",
  svcscan_fs_drivers: "26",
  svcscan_process_services: "24",
  svcscan_shared_process_services: "116",
  svcscan_nactive: "118",
  callbacks_ncallbacks: "86",
  callbacks_nanonymous: "0",
  callbacks_ngeneric: "8",
};
