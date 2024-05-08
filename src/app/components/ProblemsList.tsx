import { defineAbilityForUser } from "../defineAbilities";
import { Problem, listProblems } from "../queries/problem";
import { ProblemListDeleteButton } from "./ProblemListDeleteButton";

const user = {
  id: 12,
  isAdm: false,
  isLoggedIn: true,
};
const abilities = defineAbilityForUser(user);

export async function ProblemsList() {
  const cannotRead = abilities.cannot("readAll", "problems");
  if (cannotRead) return;

  const problems = await listProblems();

  return (
    <ul className="flex flex-col gap-2">
      {problems.map((problem) => (
        <ProblemListItem
          {...problem}
          key={problem.date.toDateString()}
        />
      ))}
    </ul>
  );
}

function ProblemListItem(problem: Problem) {
  const { title, user } = problem;
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
