import React from 'react'
import searchIcon from '../Student Athlete/Icons/search-icon.svg'
import "../Student Athlete/styles/SaSearch.css"

function SaSearch(){

    return(
        <div class="SaSearch">
            <button className="HomeButton">Home</button>
            <div className="SearchBarContainer">
                <div className="SearchIcon">
                    <img src={searchIcon} alt="Search"/>
                </div>
                <input className="SearchInput" placeholder="Search the Library"/>
            </div>
        </div>
    )

}

export default SaSearch;