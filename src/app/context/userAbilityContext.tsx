"use client";

import react, { useContext } from "react";
import { defineAbilityFor } from "../authorization/ability";
import { User } from "../types";

const context = react.createContext<
  ReturnType<typeof defineAbilityFor> | undefined
>(undefined);

export function UserAbilityProvider({
  children,
  user,
}: {
  children: react.ReactNode;
  user: User;
}) {
  const ability = defineAbilityFor(user);

  return <context.Provider value={ability}>{children}</context.Provider>;
}

export function useUserAbilityContext() {
  const userContext = useContext(context);

  if (!userContext)
    throw new Error("useUserContext must be used within a userProvider.");

  return userContext;
}
