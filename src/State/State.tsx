import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LogInContextType {
    logIn: boolean;
    setLogIn: (value: boolean) => void;
}

const LogInContext = createContext<LogInContextType | undefined>(undefined);

export const LogInProvider = ({ children }: { children: ReactNode }) => {
    const [logIn, setLogIn] = useState<boolean>(false);

    return (
        <LogInContext.Provider value={{ logIn, setLogIn }}>
            {children}
        </LogInContext.Provider>
    );
};

export const useLogInState = () => {
    const context = useContext(LogInContext);
    if (!context) {
        throw new Error('useLogInState must be used within a LogInProvider');
    }
    return context;
};
