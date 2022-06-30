import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const tooggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, tooggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};

export { DarkModeContext, DarkModeProvider };
