import { findUser } from "@/app/login/queries/userQueries";
import { User } from "@/app/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const username = data.get("username") as string;
  const password = data.get("password") as string;

  const user = await login(username, password);

  if (!user) redirect("/login?error=unregistered");

  return redirect("/");
}

async function login(nome: string, password: string) {
  const requestCookies = cookies();
  const found = await findUser(nome, password);

  if (!found) return;

  const user: User = { ...found, isLoggedIn: true };

  requestCookies.set("user", JSON.stringify(user));

  return user;
}
