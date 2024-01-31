import React from 'react'
import "../Student Athlete/styles/SaResults.css"
import PythonCrashCourse from "../Student Athlete/Icons/python_Crash_course.jpg"
import StartingPython from "../Student Athlete/Icons/startingPython.jpg"
import SearchIcon from "../Student Athlete/Icons/search-icon.svg"

function Sa_Results(){
    return(
        <div className="main">

            <div className="search-header">
                <button className="back-button">
                    <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
                        Back to Search
                </button>
                <button className="home-button">Home</button>
            </div>

            <span className="results-count">Results: 3</span>

            <div className="book-listing">
                <img src={PythonCrashCourse} alt="Python Crash Course Cover" className="book-cover"/>
                <div className="book-info">
                    <h2>Title: Python Crash Course</h2>
                    <p>Author(s): Eric Matthes</p>
                    <p>Edition: (N/A)</p>
                </div>
                <div className="book-condition">
                    <div className="condition-text">
                        <span>Average Condition:</span>
                    </div>
                    <div className="stars">★★★☆☆</div>
                    <p>Available: Yes</p>
                </div>
            </div>


            <div className="book-listing">
                <img src={StartingPython} alt="Starting out with Python Cover"
                     className="book-cover"/>
                    <div className="book-info">
                        <h2>Title: Starting out with Python</h2>
                        <p>Author(s): Tony Gaddis</p>
                        <p>Edition: 4th Edition</p>
                    </div>
                <div className="book-condition">
                    <div className="condition-text">
                        <span>Average Condition:</span>
                    </div>
                    <div className="stars">★★★★☆</div>
                    <p>Available: Yes</p>
                </div>
            </div>
        </div>

    )
}

export default Sa_Results;