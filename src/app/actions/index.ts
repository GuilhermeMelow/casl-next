"use server";

import {
  ProblemSubject,
  defineAbilityForProblem,
} from "../defineProblemAbility";
import { getUser } from "../login/queries/userQueries";

export const sinalizar = withAuthorization(
  "sinalize",
  "Problem",
  async (message: string) => {
    console.log(message);
    return message;
  }
);

function withAuthorization(
  actions: "sinalize",
  subject: { id?: number } | "Problem",
  fn: Function
) {
  return async (...args: any[]) => {
    const user = await getUser();
    const ability = defineAbilityForProblem(user);

    const cannotSinalize = ability.cannot(actions, ProblemSubject(subject));

    if (cannotSinalize) return `Não autorizado`;

    return fn(...args);
  };
}
