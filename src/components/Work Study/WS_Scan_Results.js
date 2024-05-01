import React, { useEffect, useState } from 'react';
import './styles/WS_ScanResults.css'

function WS_Scan_Results() {
    const [responseStatus, setResponseStatus] = useState(null);
    const [bodyData, setBodyData] = useState(null);
    const [payloadSent, setPayloadSent] = useState(0); 
    const [currentStatus, setCurrentStatus] = useState('');
    const [previousStatus, setPreviousStatus] = useState('');
    const [title, setTitle] = useState('');
    const QrData = sessionStorage.getItem('QrData');
    const userID = sessionStorage.getItem('userID');

    useEffect(() => {
        // Increment payloadSent when useEffect runs
        setPayloadSent(prevPayloadSent => prevPayloadSent + 1);
    }, []); // Run only once when component mounts

    useEffect(() => {
        if (payloadSent === 2) {
            console.log('useEffect hook called');
            if (!QrData || !userID) {
                console.error('UUID or UserID is not defined');
                return;
            } else {
                console.log('Both UserID and UUID are defined');
            }

            const fetchData = async () => {
                const payload = JSON.stringify({
                    UUID: QrData,
                    userId: userID
                });

                console.log('Sending payload:', payload);

                try {
                    const response = await fetch('https://95kwdwlrfl.execute-api.us-east-1.amazonaws.com/initialStage/CheckInOutResource', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload) 
                    });
                    
                    console.log(response)
                    console.log(response.status, response.body);
                    setResponseStatus(response.status); 
                    const responseBody = await response.json();
                    console.log(responseBody);
                    setBodyData(JSON.stringify(responseBody));

                    if (response.status === 200) {
                        const { status } = JSON.parse(responseBody.body);
                        const { title } = JSON.parse(responseBody.body);
                        let currentStatus;
                        let previousStatus;
                        if (status === 0) {
                            currentStatus = 'Checked In';
                            previousStatus = 'Checked Out';
                        } else {
                            currentStatus = 'Checked Out';
                            previousStatus = 'Checked In'; 
                        }
                        setCurrentStatus(currentStatus); 
                        setPreviousStatus(previousStatus);
                        setTitle(title); 
                        //alert(`Status Successfully Changed: ${currentStatus}`);
                        return;
                    } else if (response.status === 400) {
                        alert("The book does not exist in the Database");
                    } else {
                        alert("An unexpected error occurred and your book could not be reserved");
                    }
                    
                } catch (error) {
                    console.error('Fetch error:', error);
                    alert("An unexpected error occurred and your book could not be reserved");
                }

            };

            fetchData();
        }
    }, [QrData, userID, payloadSent]); // Include QrData, userID, and payloadSent in the dependencies array

    return (
        <div className="WSResults">
            {title && <p>Book: {title}</p>}
            {previousStatus && <p>Previous Status: {previousStatus}</p>}
            {currentStatus && <p>Current Status: {currentStatus}</p>} 
        </div>
    );
}

export default WS_Scan_Results;