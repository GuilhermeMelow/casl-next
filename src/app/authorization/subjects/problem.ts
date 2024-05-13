import { InferSubjects } from "@casl/ability";

interface Schema {
  id?: number;
  kind: "Problem";
}

type Actions = "readAll" | "delete" | "sinalize";
type Subject = InferSubjects<Schema>;

export type ProblemAbilityTuple = [Actions, Subject];
