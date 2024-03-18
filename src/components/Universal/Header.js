import React from 'react'
import shuImage from './Icons/ShuText.png';
import "../Universal/styles/Header.css"
import { useNavigate } from 'react-router-dom';

export function Header(){
    const navigate = useNavigate(); //NEEDED TO NAVIGATE TO DIFF PAGES

    return(
        <div className="container">
            <img src={shuImage} alt="SHU"/>
            <h1>Pitt Library Manager</h1>
            <button className='logOutButton' onClick={LogOut}>Log Out</button>
            <button className='home' onClick={GoToHome} >Home</button>
        </div>
    )

    function GoToHome(){
        navigate('/WSHomePage');
    }

    function LogOut(){
        //TODO handle logout functionality
        navigate('/SignInWithMicrosoft')
    }

}