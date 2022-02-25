import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';


export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(light);
  const [modal, setModal] = useState(true);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const viewModal = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        modal,
        viewModal
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContext;
