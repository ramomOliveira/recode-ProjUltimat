import { createContext } from 'react';

const AppContext = createContext({});

export function AppProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        name: 'teste',
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
