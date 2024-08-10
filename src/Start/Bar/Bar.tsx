import React from "react";
import logo from '../../assets/logo.png'
export function Bar(){
    return(
        <div className="flex justify-between items-center bg-white/20 rounded-xl shadow-lg border border-white/30 p-3">
            <div>
                <img src={logo} alt="logo" className='w-32' />
            </div>
            <div >
                <ul className="flex gap-6 text-gray-500">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
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