import {
  AbilityBuilder,
  MongoAbility,
  MongoQuery,
  createMongoAbility,
} from "@casl/ability";
import { User } from "../types";
import { permission } from "./permission";
import { ProblemAbilityTuple } from "./subjects/problem";
import { ProfileAbilityTuple } from "./subjects/profile";

type Abilities = ProblemAbilityTuple | ProfileAbilityTuple | ["manage", "all"];

export type AppAbility = MongoAbility<Abilities, MongoQuery>;
const abilityType = createMongoAbility<Abilities, MongoQuery>;

export function defineAbilityFor(user: User) {
  console.log(user);
  const builder = new AbilityBuilder(abilityType);
  const factory = permission[user.type];

  if (typeof factory !== "function")
    throw new Error(`Unknowning role was used, ${user.type}`);

  factory(user, builder);

  return builder.build({
    detectSubjectType(subject) {
      return subject.kind;
    },
  });
}
