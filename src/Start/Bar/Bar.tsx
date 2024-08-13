import {useState} from "react";
import './Bar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {LogIn} from '../../Firebase/LogIn'
export function Bar() {
    const [hidden, setHidden] = useState(true);
    const toggleMenu = () => {
        setHidden(!hidden);
    };
    return (
        <div className="bar-container slide-in">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="Links">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="Links">About</Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="Links">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="Links">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="Links">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="auth-actions">
                    <button onClick={toggleMenu}>Sign In</button>
                    {!hidden&& <LogIn  />}
                    <li>
                        <button className="get-started-button">Get Started</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
