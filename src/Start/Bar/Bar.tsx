import React from "react";
import './Bar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function Bar() {
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
                    <li>Sign In</li>
                    <li>
                        <button className="get-started-button">Get Started</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
