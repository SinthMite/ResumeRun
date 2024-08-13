import React from "react";
import { useLogInState } from '../State/State';

export function AppRR() {
    const { setLogIn } = useLogInState();

    return (
        <div>
            <button onClick={() => setLogIn(false)}>Sign Out</button>
            <h1>AppRR Page</h1>
        </div>
    );
}
