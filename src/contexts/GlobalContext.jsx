import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <GlobalContext.Provider value={{ isRegistered, setIsRegistered }}>
      {children}
    </GlobalContext.Provider>
  );
};
