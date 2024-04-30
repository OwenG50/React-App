import React, { useEffect, useState } from 'react';

// Component to display the results of the QR Scan data
function WS_Scan_Results() {
    const [responseStatus, setResponseStatus] = useState(null);
    const QrData = sessionStorage.getItem('QrData');
    const userID = sessionStorage.getItem('userID');

    useEffect(() => {
        if (!QrData || !userID) {
            console.error('UUID or UserID is not defined');
            return;
        } else {
            console.log('Both UserID and UUID are defined');
        }

        const fetchData = async () => {
            // Log the payload that will be sent
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
                    body: JSON.stringify({ body: payload }) // Correctly format the body as a JSON string
                });

                console.log(response.status);
                setResponseStatus(response.status); // Update the state with the response status
                if (response.status === 200) {
                    alert("Reservation Successful");
                } else if (response.status === 400) {
                    alert("Book could not be reserved");
                } else {
                    alert("An unexpected error occurred and your book could not be reserved");
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert("An unexpected error occurred and your book could not be reserved");
            }
        };

        fetchData();
    }, [QrData, userID]);

    return (
        <div>
            <p>{QrData}</p>
            <p>{userID}</p>
            {responseStatus && <p>Response Status: {responseStatus}</p>}
        </div>
    );
}

export default WS_Scan_Results;