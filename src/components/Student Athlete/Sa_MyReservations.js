
    import React from 'react'
    import "../Student Athlete/styles/SaMyRes.css"
    import PythonCrashCourse from "../Student Athlete/Icons/python_Crash_course.jpg"
    import StartingPython from "../Student Athlete/Icons/startingPython.jpg"
    import SearchIcon from "../Student Athlete/Icons/search-icon.svg"
    
    function Sa_MyReservations(){
        return(
            <div className="main">
    
                <div className="search-header">
                    <button className="back-button">
                        <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
                            Back to Search
                    </button>
                    <button className="home-button">Home</button>
                </div>
    
                <span className="results-count">Results: 2</span>
    
                <div className="book-listing">
                    <img src={PythonCrashCourse} alt="Python Crash Course Cover" className="book-cover"/>
                    <div className="book-info">
                        <h2>Title: Python Crash Course</h2>
                        <p>Author(s): Eric Matthes</p>
                        <p>Edition: (N/A)</p>
                    </div>
                    <div className="book-condition">
                        <div className="condition-text">
                            <span>Reservation #: 59361</span>
                            
                        </div>
                        <span>Reservation Status: Ready for Pickup</span>
                        <span>Due Date: 05/09/2023</span>
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
                            <span>Reservation #: 27895:</span>
                        </div>
                        <span>Reservation Status: Checked Out</span>
                        <span>Due Date: 05/09/2023</span>
                    </div>
                </div>
            </div>
    
        )
    }
    

export default Sa_MyReservations;