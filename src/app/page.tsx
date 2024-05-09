import { ProblemsList } from "./components/ProblemsList";
import { RegistrationForm } from "./components/RegistrationForm";
import { UserProvider } from "./context/userContext";
import { getUser } from "./login/queries/userQueries";

export default async function Home() {
  const user = await getUser();

  return (
    <UserProvider user={user}>
      <main className="flex flex-col min-h-screen p-24 justify-between items-center font-mono">
        <div className="w-[750px] flex-1 p-2 border border-white">
          <ProblemsList />
        </div>
        <RegistrationForm />
      </main>
    </UserProvider>
  );
}
