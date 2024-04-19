import React, { useEffect, useState } from 'react';

function WS_Scan_Results(props) {

    const QrData = sessionStorage.getItem('QrData');
    const [reload, setReload] = useState(false); // State to trigger re-render

    //console.log(QrData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReload(prev => !prev); // Toggle the state to force re-render
        }, 1000); // Set the timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer
    }, [reload]); // Depend on `reload` to reset the timer if needed

    return (
        <div>
            <p>{ QrData }</p>
            <p>Results Page!</p>
        </div>

         )
    }

export default WS_Scan_Results;