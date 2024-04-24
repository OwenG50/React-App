import React from 'react';
import shuImage from './Icons/ShuText.png';
import "../Universal/styles/Header.css";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem('userEmail'); // Check if user email is stored

    function GoToHome() {
        const role = sessionStorage.getItem('role'); // Retrieve role from session storage
        // Navigate based on role
        if (role === 'admin') {
            navigate('/WSHomePage'); //No Admin Page yet
        } else if (role === 'student') {
            navigate('/SaHome');
        } else if (role === 'work study') {
            navigate('/WSHomePage');
        } else if (role === 'user'){
           navigate('/WSHomePage')  //Default testing role has access to all features
        } else {
            console.error('Unknown role or no role set');
        }
    }

    function LogOut() {
        // Clear the session storage when logging out
        sessionStorage.clear();
        navigate('/SignInWithMicrosoft');
    }

    return (
        <div className="container">
            <img src={shuImage} alt="SHU"/>
            <h1>Pitt Library Manager</h1>
            <button className='logOutButton' onClick={LogOut}>Log Out</button>
            {isLoggedIn && <button className='home' onClick={GoToHome}>Home</button>}
        </div>
    );
}
