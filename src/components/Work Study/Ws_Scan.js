import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import '../Work Study/styles/WS_Scan.css'

function Ws_Scan() {
    const [QrData, setQrData] = useState(null);
    const [bookUID, setBookUID] = useState('');

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

  const resetScanner = () => {

  }
  const handleError = err => {
    console.error(err);
  }

  return (
    <div className="WSScan">
      <QrReader
        delay={300}
        onResult={handleScan}
      />
      {QrData && (
        <div>
          <p>QR Code Data:</p>
          <p>{QrData.text}</p>
        </div>
      )}
      {QrData !== null && (
        <button onClick={resetScanner}>Scan Again</button>
      )}
    </div>
  );
}

export default Ws_Scan;