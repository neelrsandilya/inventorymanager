'use client';

import React from 'react';
import { logout } from '@/actions/actions';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useUser } from '@/context/Usercontext';

const Logoutbutton = () => {
  const { Loginstatus, setLoginstatus } = useUser();

  const logoutWithState = async (prevState, formData) => {
    await logout(); // call server action
    setLoginstatus(true); // update context only after logout
    return prevState;
  };

  const [state, logoutAction] = useActionState(logoutWithState, undefined);

  if (!Loginstatus) return null;

  return (
    <form action={logoutAction}>
      <LogoutClick />
    </form>
  );
};

function LogoutClick() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-r from-indigo-800 to-blue-400  flex justify-center  text-white active:bg-blue-950 font-medium rounded-full text-sm px-5 py-2.5"
    >
      {pending ? 'Logging out...' : 'Logout'}
    </button>
  );
}

export default Logoutbutton;
