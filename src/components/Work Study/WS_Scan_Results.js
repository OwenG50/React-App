import React from 'react';
import { useLocation } from 'react-router-dom';

function WS_Scan_Results(props) {

    //const { state: { QrData } = {} } = useLocation();
    const QrData = sessionStorage.getItem('QrData');

    console.log(QrData);

return (
    <div>
        <p>{ QrData }</p>;
        <p>Results Page!</p>
    </div>

     )
}

export default WS_Scan_Results;