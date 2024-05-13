import { InferSubjects } from "@casl/ability";

interface Schema {
  id?: number;
  featureFlags?: string[];
  kind: "Problem";
}

type Actions = "readAll" | "delete" | "sinalize";
type Subject = InferSubjects<Schema>;

export type ProblemAbilityTuple = [Actions, Subject];
