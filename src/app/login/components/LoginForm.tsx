"use client";

export function LoginForm() {
  return (
    <form
      action="/login/api"
      method="post"
      className="w-96 flex flex-col font-mono px-4 h-72 justify-center border"
    >
      <div className="mb-2 ">
        <label className="block">Nome do usuário:</label>
        <input
          name="username"
          type="text"
          className="bg-black p-1 w-full border"
        />
      </div>
      <div className="mb-5">
        <label className="block">Senha:</label>
        <input
          name="password"
          type="password"
          className="bg-black p-1 w-2/3 border"
        />
      </div>
      <input
        type="submit"
        value="Entrar"
        className="border p-2 border-white float-right"
      />
    </form>
  );
}
