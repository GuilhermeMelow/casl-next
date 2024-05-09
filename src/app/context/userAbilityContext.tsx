"use client";

import react, { useContext } from "react";
import { defineAbilityForProblem } from "../defineProblemAbility";
import { User } from "../types";

const context = react.createContext<
  ReturnType<typeof defineAbilityForProblem> | undefined
>(undefined);

export function UserAbilityProvider({
  children,
  user,
}: {
  children: react.ReactNode;
  user: User;
}) {
  const ability = defineAbilityForProblem(user);

  return <context.Provider value={ability}>{children}</context.Provider>;
}

export function useUserAbilityContext() {
  const userContext = useContext(context);

  if (!userContext)
    throw new Error("useUserContext must be used within a userProvider.");

  return userContext;
}
