const db = [
  {
    user: { id: 12, nome: "Melo" },
    title: "Preciso de ajuda, estou sem água!",
    date: new Date(),
  },
  {
    user: { nome: "Anonimo" },
    title: "O poste da minha rua está quebrado...",
    date: new Date(),
  },
  {
    user: { nome: "Anonimo" },
    title: "A água da região onde eu vivo está muito suja :(",
    date: new Date(),
  },
  {
    user: { nome: "Anonimo" },
    title: "A energia aqui vive piscando...",
    date: new Date(),
  },
];

export async function listProblems() {
  return db;
}

export async function getProblems(userId: number) {
  return db.filter((g) => g.user.id === userId);
}

export type Problem = (typeof db)[0];
