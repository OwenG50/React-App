import React, { useEffect } from 'react';


//Component to display the results of the QR Scan data
function WS_Scan_Results(props) {
    const QrData = sessionStorage.getItem('QrData');

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload(); // Refresh the page
        }, 2000); // Set the timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer to avoid unwanted refreshes
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    return (
        <div>
            <p>{QrData}</p>
            <p>Results Page!</p>
        </div>
    );
}

export default WS_Scan_Results;


