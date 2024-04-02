
import { useNavigate } from 'react-router-dom';

function WorkStudyHome() {
    const navigate = useNavigate();

    function searchLibrary() {
        navigate('/BookListings')
    };

    function libraryInventory() {

    };

    function addBook() {
        navigate('/WS_AddBook.js');

    };

    function removeBook() {

    };

    function checkOut() {
        navigate('/WS_Scan.js')

    };

    function checkIn() {

    };
    


    return (
        <div className="WindowContainer">
            <h1 className="topText">Pitt Library Manager</h1>
            <h2 className="SchoolText">Sacred Heart University</h2>
            <button className="LogInButton" onClick={searchLibrary}>
                Search Library
            </button>
            <button className="LogInButton" onClick={libraryInventory}>
                Library Inventory 
            </button>
            <button className="LogInButton" onClick={addBook}>
                Add Book
            </button>
            <button className="LogInButton" onClick={removeBook}>
                Remove Book
            </button>
            <button className="LogInButton" onClick={checkOut}>
                Check Out
            </button>
            <button className="LogInButton" onClick={checkIn}>
                Check In
            </button>
        </div>
    );
}

export default WorkStudyHome;