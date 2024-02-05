import React from 'react'
import "../Student Athlete/styles/SaResConfirm.css"
import SearchIcon from "../Student Athlete/Icons/search-icon.svg"

function Sa_ResConfirm(){
    return(
        <div className="main">


            <div className="search-header">
                <button className="back-button">
                    <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
                        Back to Search
                </button>
                <button className="home-button">Home</button>
            </div>

            <div className='complete'>
                <p className='complete-header'>Reservation Complete!</p>
                <p className='num'>Reservation Confirmation Number:</p>
                <p className='num'>59361</p>
            </div>

        </div>

    )
}

export default Sa_ResConfirm;