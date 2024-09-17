// Users
export const PROFILE_URL = "/users/profile/";

// Auth
export const LOGIN_URL = "/users/login/";
export const PASSWORD_RESET_URL = "/users/password-reset/";
export const PASSWORD_RESET_CONFIRM_URL = "/users/password-reset-confirm/";
export const passwordResetConfirmUrl = (
  uid: string | null,
  token: string | null
) => {
  return `${PASSWORD_RESET_CONFIRM_URL}${uid}/${token}/`;
};
export const REGISTER_URL = "/users/register/";

// Predict
export const PREDICT_URL = "/predict/";
