'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [Loginstatus, setLoginstatus] = useState(true);

  return (
    <UserContext.Provider value={{ Loginstatus, setLoginstatus }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
