"use server";

import { Abilities, defineAbilityFor } from "../authorization/ability";
import { getUser } from "../login/queries/userQueries";
import { User } from "../types";

export async function sinalizar(message: string) {
  const isAuthorize = await authorize({
    user: await getUser(),
    appAbility: ["sinalize", "Problem"],
  });

  if (!isAuthorize) return "Não autorizado";

  return message;
}

export async function remove(title: string) {
  const user = await getUser();
  const isAuthorize = await authorize({
    user,
    appAbility: ["delete", { kind: "Problem", id: user.id }],
  });

  if (!isAuthorize) return "Não autorizado";

  return "removendo... " + title;
}

async function authorize({ user, appAbility }: AuthorizeInput) {
  const ability = defineAbilityFor(user);

  const isAuthorize = ability.can(...appAbility);

  return isAuthorize;
}

type AuthorizeInput = { appAbility: Abilities; user: User };
