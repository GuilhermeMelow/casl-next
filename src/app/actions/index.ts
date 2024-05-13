"use server";

import {
  defineAbilityForProblem,
  withAuthorization,
} from "../authorization/ability";
import { getUser } from "../login/queries/userQueries";

export const sinalizar = withAuthorization(
  "sinalize",
  "Problem",
  getUser(),
  async (message: string) => {
    return message;
  }
);

export async function remove(title: string) {
  const user = await getUser();

  const ability = defineAbilityForProblem(user);

  const cannotDelete = ability.cannot("delete", {
    id: user.id,
    kind: "Problem",
  });

  if (cannotDelete) return "Não autorizado";

  return "removendo..." + title;
}
