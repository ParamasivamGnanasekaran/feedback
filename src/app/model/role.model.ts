export interface Role {
  value: string;
  viewValue: string;
}

export interface LoginUser {
  email?: string;
  id?: number;
  last_login?: string;
  manager_name?: string | null;
  password?: string;
  register?: String;
  role?: string;
  team_name?: null | string;
  username?: string;
}
