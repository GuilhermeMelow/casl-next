import { Role } from "./authorization/roles";

export type User = {
  id: number;
  username: string;
  type: Role;
  isLoggedIn: boolean;
};

export type DbUser = {
  id: number;
  username: string;
  password: string;
  type: Role;
};
