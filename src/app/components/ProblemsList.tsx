import { defineAbilityFor } from "../authorization/ability";
import { getUser } from "../login/queries/userQueries";
import { Problem, listProblems } from "../queries/problem";
import { ProblemListDeleteButton } from "./ProblemListDeleteButton";

export async function ProblemsList() {
  const user = await getUser();
  const ability = defineAbilityFor(user);
  const cannotRead = ability.cannot("readAll", {
    featureFlags: user.featureFlags,
    kind: "Problem",
  });

  if (cannotRead) return;

  const problems = await listProblems();

  return (
    <ul className="flex flex-col gap-2">
      {problems.map((problem) => (
        <ProblemListItem
          problem={problem}
          key={problem.date.toDateString()}
        />
      ))}
    </ul>
  );
}

function ProblemListItem({ problem }: { problem: Problem }) {
  const { title, user } = problem;

  return (
    <li className="p-2 flex justify-between group">
      <span>
        {user?.nome ?? "Anonimo"}: {title}
      </span>
      <ProblemListDeleteButton
        problem={problem}
        className=" hidden group-hover:block"
      />
    </li>
  );
}
