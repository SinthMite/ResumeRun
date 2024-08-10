import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'
export function Bar(){
    return(
        <div className="flex justify-between items-center bg-white/20 rounded-xl shadow-lg border border-white/30 p-3">
            <div>
                <img src={logo} alt="logo" className='w-32' />
            </div>
            <div >
                <ul className="flex gap-6 text-gray-500">
                <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-6 text-gray-500">
                    <li>Sign In</li>
                    <button className="bg-blue-500 text-white">Get Started</button>
                </ul>
            </div>
        </div>
    )
}