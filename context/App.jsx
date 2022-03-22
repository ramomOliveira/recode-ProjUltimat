import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import ModalSuccess from '../components/ModalSuccess';


export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  const [theme, setTheme] = useState(light);
  const [modal, setModal] = useState(true);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const viewModal = () => {
    setModal(false);
  };

  const showModalSuccess = (msg, tempoEmSegundo = 3) => {
    setMessage(msg)
    setShow(true)
    setTimeout(() => setShow(false), tempoEmSegundo * 1000)
  };

  return (
    <AppContext.Provider
      value={{
        showModalSuccess,
        theme,
        toggleTheme,
        modal,
        viewModal
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
        <ModalSuccess
          show={show}
          onClose={() => setShow(false)}
          title={message}
        />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContext;
