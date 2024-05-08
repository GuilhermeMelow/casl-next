"use client";

export function RegistrationForm() {
  return (
    <div className="w-80 p-2 flex flex-col gap-5 items-center justify-center">
      <div className="w-5/6 grid">
        <label htmlFor="problema">Qual o seu problema ?</label>
        <input
          id="problema"
          className="p-1 bg-black border border-white text-white"
        />
      </div>
      <button
        className="border p-2 rounded-md w-full"
        onClick={() => console.log("sending...")}
      >
        Sinalizar
      </button>
    </div>
  );
}
