const db: Problem[] = [
  {
    user: { id: 14, nome: "user1" },
    title: "Preciso de ajuda, estou sem água!",
    date: new Date(),
  },
  {
    title: "O poste da minha rua está quebrado...",
    date: new Date(),
  },
  {
    title: "A água da região onde eu vivo está muito suja :(",
    date: new Date(),
  },
  {
    title: "A energia aqui vive piscando...",
    date: new Date(),
  },
];

export async function listProblems() {
  return db;
}

export async function getProblems(userId: number) {
  return db.filter((g) => (g.user as User).id === userId);
}

export type Problem = {
  user?: User;
  title: string;
  date: Date;
};

export type User = {
  id: number;
  nome: string;
};
