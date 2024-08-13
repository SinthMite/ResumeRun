import './LogIn.scss';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 
    UserCredential 
} from "firebase/auth";
import { auth } from './Firebase';
import { useLogInState } from '../State/State';

export function LogIn() {
    const { logIn, setLogIn } = useLogInState();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    useEffect(() => {
        const logInData = window.localStorage.getItem('LogInValue');
        if (logInData !== null) {
            const parsedLogInData = JSON.parse(logInData);
            if (typeof parsedLogInData === 'boolean') {
                setLogIn(parsedLogInData);
            }
        } else {
            setLogIn(false);
        }
    }, [setLogIn]);

    useEffect(() => {
        if (logIn !== null) {
            window.localStorage.setItem('LogInValue', JSON.stringify(logIn));
        }
    }, [logIn]);

    const authSignInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result: UserCredential) => {
                setLogIn(true);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Google Auth Error:", error);
                setError("Failed to sign in with Google.");
                setLoading(false);
            });
    };

    const authSignInWithEmail = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result: UserCredential) => {
                setLogIn(true);
                setEmail('');
                setPassword('');
                setLoading(false);
            })
            .catch((error) => {
                console.error("Email Auth Error:", error);
                setError("Failed to sign in with email.");
                setLoading(false);
            });
    };

    const authCreateAccountWithEmail = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                setEmail('');
                setPassword('');
                setLoading(false);
            })
            .catch((error) => {
                console.error("Create Account Error:", error);
                setError("Failed to create account.");
                setLoading(false);
            });
    };

    const authSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setLogIn(false);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Sign Out Error:", error);
                setError("Failed to sign out.");
                setLoading(false);
            });
    };

    const guestLogIn = () => {
        setLoading(true);
        const guestEmail = 'tester@test.com';
        const guestPassword = 'password';
        signInWithEmailAndPassword(auth, guestEmail, guestPassword)
            .then((result: UserCredential) => {
                setLogIn(true);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Guest Auth Error:", error);
                setError("Failed to sign in as guest.");
                setLoading(false);
            });
    };

    return (
        <div className='totalscreenLogView'>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                logIn === false ? (
                    <section id="logged-out-view">
                        <div className="containerLogIn">
                            <h1 className="app-title">Welcome</h1>
                            <div className="provider-buttons">
                                <button className="provider-btn" onClick={authSignInWithGoogle}>Sign in with Google</button>
                            </div>
                            <div className="auth-fields-and-buttons">
                                <input 
                                    className='inputLog' 
                                    id="email-input" 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                />
                                <input 
                                    className='inputLog' 
                                    id="password-input" 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={handlePasswordChange} 
                                />
                                <button className="primary-btn" onClick={authSignInWithEmail}>Sign in</button>
                                <button className="secondary-btn" onClick={authCreateAccountWithEmail}>Create Account</button>
                                <button className="tri-btn" onClick={guestLogIn}>Demo</button>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section id="logged-in-view">
                        <div className="containerLogIn">
                            <h1 className="app-title">Welcome</h1>
                            <button className="primary-btn" onClick={authSignOut}>Sign Out</button>
                        </div>
                    </section>
                )
            )}
        </div>
    );
}
