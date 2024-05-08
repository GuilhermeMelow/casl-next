"use client";

import { Trash2 } from "lucide-react";
import { Problem } from "../queries/problem";

export function ProblemListDeleteButton({
  problem,
  ...attributes
}: { problem: Problem } & React.HTMLAttributes<HTMLButtonElement>) {
  const deleteProblem = () => {
    console.log("removendo...", problem.title);
  };

  return (
    <button
      {...attributes}
      onClick={deleteProblem}
    >
      <Trash2 />
    </button>
  );
}
