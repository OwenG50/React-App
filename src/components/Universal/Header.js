import React from 'react'
import shuImage from './Icons/ShuText.png';
import "../Universal/styles/Header.css"

export function Header(){

    return(
        <div className="container">
            <img src={shuImage} alt="SHU"/>
            <h1>Pitt Library Manager</h1>
            <button>Log Out</button>
        </div>
    )
}