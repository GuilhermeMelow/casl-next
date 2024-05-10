import {
  AbilityBuilder,
  InferSubjects,
  MongoQuery,
  createMongoAbility,
} from "@casl/ability";
import { User } from "./types";

export const defineAbilityForProblem = (user: User) => {
  const ability = createMongoAbility<[Actions, Subjects], Conditions>;
  const { can, cannot, build } = new AbilityBuilder(ability);

  can("sinalize", "Problem");

  if (user.isLoggedIn) {
    can("readAll", "Problem");
    can("delete", "Problem", { id: user.id });
  }

  if (user.isLoggedIn && user.isAdm) {
    can("delete", "Problem");
    cannot("sinalize", "Problem");
  }

  return build({
    detectSubjectType: (item) => item.kind,
  });
};

export type ProblemAbility = ReturnType<typeof defineAbilityForProblem>;

export function ProblemSubject(subject: { id?: number } | "Problem"):
  | {
      id?: number;
      kind: "Problem";
    }
  | "Problem" {
  if (typeof subject === "string") return subject;

  return { id: subject.id, kind: "Problem" };
}

type Actions = "readAll" | "delete" | "sinalize";
type Conditions = MongoQuery;
type Subjects = InferSubjects<ReturnType<typeof ProblemSubject>>;
