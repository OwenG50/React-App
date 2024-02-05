import React from 'react'
import "../Student Athlete/styles/SaBook.css"
import PythonCrashCourse from "../Student Athlete/Icons/python_Crash_course.jpg"
import SearchIcon from "../Student Athlete/Icons/search-icon.svg"

function Sa_Book(){
    return(
        <div className="main">

            <div className="search-header">
                <button className="back-button">
                    <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
                        Back to Search
                </button>
                <button className="home-button">Home</button>
            </div>


            <div className="book-listing">
                <div>
                <img src={PythonCrashCourse} alt="Python Crash Course Cover" className="book-cover"/>
                <p>Copies Available: 2 </p>
                </div>
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
                    <p>Currently Available: Yes</p>
                    <p>Next Date Available (N/A)</p>
                </div>

            </div>
            <div>
                <button className='Reserve'>Reserve Now</button>
            </div>



        </div>

    )
}

export default Sa_Book;