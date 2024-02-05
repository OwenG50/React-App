import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import '../Work Study/styles/WS_Scan.css'

function Ws_Scan() {
    const [QrData, setQrData] = useState(null);

    const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
      setQrData(data);
    }
    else {
        console.log('No QR Code Visible'); 
        setQrData(null);
    }
  }

  const handleError = err => {
    console.error(err);
  }

  return (
    <div className="WSScan">
      <QrReader
        delay={300}
        //onError={handleError}
        //onScan={handleScan}
        onResult={handleScan}
      />
      {QrData && (
        <div>
          <p>QR Code Data:</p>
          <p>{QrData.text}</p>
        </div>
      )}
    </div>
  );
}

export default Ws_Scan;