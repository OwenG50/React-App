import React from 'react';

function WS_Scan_Results(props) {

    const QrData = sessionStorage.getItem('QrData');

    //console.log(QrData);

return (
    <div>
        <p>{ QrData }</p>
        <p>Results Page!</p>
    </div>

     )
}

export default WS_Scan_Results;