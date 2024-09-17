export const RESPONSE = {
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  method_not_allowed: 405,
  conflict: 409,
  unprocessable_entity: 422,
  internal_server_error: 500,
  ok: 200,
};

export const DEFAULT_ERROR = {
  header: "Ocurrió un error",
  server: "No se obtuvo respuesta del servidor.",
  message: "Ocurrió un error, por favor intente nuevamente",
  emailNotFound: "No se encontró una cuenta con este correo electrónico",
};

export const REVALIDATION_TIME_IN_SECONDS = Number(
  process.env.NEXT_PUBLIC_REVALIDATION_TIME_IN_SECONDS ?? 120
);
export const REVALIDATION_INTERVAL_IN_MILISECONDS =
  1000 * REVALIDATION_TIME_IN_SECONDS;

// Paths
export const DASHBOARD_PATH = "/dashboard";
export const PERFIL_PATH = "/perfil";
export const CAMBIAR_CONTRASENA_PATH = "/perfil/cambiar-contrasena";

// New app paths
export const LOGIN_PATH = "/auth/iniciar-sesion";
export const RECUPERAR_CONTRASENA_PATH = "/auth/recuperar-contrasena";
export const REGISTRARSE_PATH = "/auth/registrarse";

// App name
export const APP_NAME = "CiphraGuard";
