import { createContext, useState, useContext } from 'react';

// Create a context with a default value
const LogInContext = createContext({
  logIn: false, // Default value
  setLogIn: () => {}, // No-op function as default
});

// Create a provider component
export const LogInProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  return (
    <LogInContext.Provider value={{ logIn, setLogIn }}>
      {children}
    </LogInContext.Provider>
  );
};

// Custom hook to use the logInState
export const useLogInState = () => {
  return useContext(LogInContext);
};
