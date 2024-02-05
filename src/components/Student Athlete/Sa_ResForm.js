import React from 'react'
import "../Student Athlete/styles/SaResForm.css"
import PythonCrashCourse from "../Student Athlete/Icons/python_Crash_course.jpg"
import SearchIcon from "../Student Athlete/Icons/search-icon.svg"

function Sa_ResForm(){
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
                </div>

            </div>

            <div className='Reservation'>
                
                <div className='length'>
                <p>Length of Reservation</p>  
                <select>
                    <option>--select--</option>
                    <option>16 weeks (Entire Semester)</option>
                </select>
                </div> 
            

                
                <div className='pickUp'>
                <p>Desired Pickup Day</p>  
                <select>
                    <option>--select--</option>
                    <option>First Day of Classes</option>
                </select>
                </div>  
                         

            </div>
            <div>
                <button className='completeRes'>Complete Reservation</button>
            </div>



        </div>

    )
}

export default Sa_ResForm;