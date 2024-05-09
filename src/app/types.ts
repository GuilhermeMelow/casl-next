export type User = {
  id: number;
  username: string;
  isAdm: boolean;
  isLoggedIn: boolean;
};

export type DbUser = {
  id: number;
  username: string;
  password: string;
  isAdm: boolean;
};
