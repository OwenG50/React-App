import React, { useEffect, useState } from 'react';

function WS_Scan_Results() {
    const [responseStatus, setResponseStatus] = useState(null);
    const [bodyData, setBodyData] = useState(null);
    const [payloadSent, setPayloadSent] = useState(0); 
    const [readableStatus, setReadableStatus] = useState(''); // Declare readableStatus state variable
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
                        body: JSON.stringify(payload) // Correctly format the body as a JSON string
                    });
                    
                    console.log(response)
                    console.log(response.status, response.body);
                    setResponseStatus(response.status); // Update the state with the response status
                    const responseBody = await response.json();
                    console.log(responseBody);
                    setBodyData(JSON.stringify(responseBody));

                    if (response.status === 200) {
                        const { status } = JSON.parse(responseBody.body);
                        let readableStatus;
                        if (status === 0) {
                            readableStatus = 'Checked In';
                        } else {
                            readableStatus = 'Checked Out'; 
                        }
                        setReadableStatus(readableStatus); // Update readableStatus state variable
                        alert(`Status Successfully Changed: ${readableStatus}`);
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
        <div>
            <p>{QrData}</p>
            <p>{userID}</p>
            {responseStatus && <p>Response Status: {responseStatus}</p>}
            {bodyData && <p>Body: {bodyData}</p>}
            {readableStatus && <p>Readable Status: {readableStatus}</p>} {/* Render readableStatus */}
        </div>
    );
}

export default WS_Scan_Results;