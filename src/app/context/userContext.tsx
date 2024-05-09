"use client";

import react, { ReactNode, createContext, useContext } from "react";
import { User } from "../types";

const context = createContext<User | undefined>(undefined);

export function UserProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: User;
}) {
  const [state] = react.useState(user);

  return <context.Provider value={state}>{children}</context.Provider>;
}

export function useUserContext() {
  const userContext = useContext(context);

  if (!userContext)
    throw new Error("useUserContext must be used within a userProvider.");

  return userContext;
}
