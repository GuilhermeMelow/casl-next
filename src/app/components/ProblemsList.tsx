import {
  ProblemAbility,
  defineAbilityForProblem,
} from "../defineProblemAbility";
import { getUser } from "../login/queries/userQueries";
import { Problem, listProblems } from "../queries/problem";
import { ProblemListDeleteButton } from "./ProblemListDeleteButton";

export async function ProblemsList() {
  const ability = defineAbilityForProblem(await getUser());
  const cannotRead = ability.cannot("readAll", "Problem");

  if (cannotRead) return;

  const problems = await listProblems();

  return (
    <ul className="flex flex-col gap-2">
      {problems.map((problem) => (
        <ProblemListItem
          problem={problem}
          ability={ability}
          key={problem.date.toDateString()}
        />
      ))}
    </ul>
  );
}

function ProblemListItem({
  ability,
  problem,
}: {
  problem: Problem;
  ability: ProblemAbility;
}) {
  const { title, user } = problem;

  const cannotDelete = ability.cannot("delete", "Problem");
  console.log(cannotDelete);

  if (cannotDelete) return;

  return (
    <li className="p-2 flex justify-between group">
      {user.nome}: {title}
      <ProblemListDeleteButton
        problem={problem}
        className=" hidden group-hover:block"
      />
    </li>
  );
}
