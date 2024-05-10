"use client";

import { Trash2 } from "lucide-react";
import { useUserAbilityContext as useProblemUserAbilityContext } from "../context/userAbilityContext";
import { ProblemSubject } from "../defineProblemAbility";
import { Problem } from "../queries/problem";

export function ProblemListDeleteButton({
  problem: { title, user },
  ...attributes
}: { problem: Problem } & React.HTMLAttributes<HTMLButtonElement>) {
  const ability = useProblemUserAbilityContext();
  const canDelete = ability.can("delete", ProblemSubject({ id: user?.id }));

  if (!canDelete) return;

  const deleteProblem = () => {
    console.log("removendo...", title);
  };

  return (
    <button
      {...attributes}
      onClick={deleteProblem}
    >
      <Trash2 size={22} />
    </button>
  );
}
