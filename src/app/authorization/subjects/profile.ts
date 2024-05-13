import { InferSubjects } from "@casl/ability";

interface Schema {
  id?: number;
  kind: "Profile";
}

type Actions = "update";
type Subject = InferSubjects<Schema>;

export type ProfileAbilityTuple = [Actions, Subject];
