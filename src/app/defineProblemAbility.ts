import {
  AbilityBuilder,
  MongoAbility,
  MongoQuery,
  createMongoAbility,
} from "@casl/ability";
import { Problem } from "./queries/problem";
import { User } from "./types";

export const defineAbilityForProblem = (user: User) => {
  const ability = createMongoAbility<[Actions, Subjects], Conditions>;
  const { can, build } = new AbilityBuilder(ability);

  can("sinalize", "Problem");

  if (user.isLoggedIn) {
    can("readAll", "Problem");
    can("delete", "Problem", { user: user.id });
  }

  if (user.isLoggedIn && user.isAdm) {
    can("delete", "Problem");
  }

  return build();
};

type Actions = "readAll" | "delete" | "sinalize";
type Conditions = MongoQuery;
type Subjects = Problem | "Problem";

export type ProblemAbility = MongoAbility<[Actions, Subjects], Conditions>;
