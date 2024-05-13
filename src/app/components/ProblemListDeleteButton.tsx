"use client";

import { Trash2 } from "lucide-react";
import { remove } from "../actions";
import { useUserAbilityContext as useProblemUserAbilityContext } from "../context/userAbilityContext";
import { Problem } from "../queries/problem";

export function ProblemListDeleteButton({
  problem: { title, user },
  ...attributes
}: { problem: Problem } & React.HTMLAttributes<HTMLButtonElement>) {
  const ability = useProblemUserAbilityContext();
  const canDelete = ability.can("delete", { id: user?.id, kind: "Problem" });

  if (!canDelete) return;

  const deleteProblem = async () => {
    console.log(await remove(title));
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
