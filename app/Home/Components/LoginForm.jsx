"use client";

import { useActionState } from "react";
import { login } from "@/actions/actions";
import { useUser } from "@/context/Usercontext";
import { useFormStatus } from "react-dom";

export function LoginForm() {
  const { setLoginstatus } = useUser();

  const [state, loginAction] = useActionState(
    async (prevState, formData) => {
      const result = await login(prevState, formData);
      if (!result?.errors) {
        setLoginstatus(true); 
      }
      return result;
    },
    undefined
  );

  return (
    <form
      action={loginAction}
      className="w-full max-w-md mx-auto mt-32 px-8 py-10 bg-white shadow-lg rounded-2xl flex flex-col gap-5 text-black"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          User Id
        </label>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          name="email"
          placeholder="Enter your User Id"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {state?.errors?.password && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-gradient-to-r from-indigo-800 to-blue-400 rounded-full p-2 flex justify-center text-white active:bg-blue-950"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
