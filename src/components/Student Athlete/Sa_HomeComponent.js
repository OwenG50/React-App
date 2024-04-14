
import { useNavigate } from 'react-router-dom';

function SAHome() {
    const navigate = useNavigate();

    function searchLibrary() {
        navigate('/BookListings')
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
            <button className="LogInButton" onClick={checkOut}>
                Check Out
            </button>
            <button className="LogInButton" onClick={checkIn}>
                Check In
            </button>
        </div>
    );
}

export default SAHome;