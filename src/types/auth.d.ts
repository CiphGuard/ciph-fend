export interface AuthToken {
  access_token?: string;
  refresh_token: string;
  token_type: "Bearer";
}

export interface Token {
  access: string;
  refresh: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
}
