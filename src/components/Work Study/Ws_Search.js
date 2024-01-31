import searchIcon from "../Student Athlete/Icons/search-icon.svg";
import React from "react";
import '../Work Study/styles/WSSearch.css'

function WsSearch(){

    return(
        <div className="WSSearch">
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

export default WsSearch;