import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import '../Work Study/styles/WS_Scan.css'
import { useNavigate } from 'react-router-dom';



function Ws_Scan() {
    const [QrData, setQrData] = useState(null);
    const navigate = useNavigate();

    const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
      setQrData(data.text);
      sessionStorage.setItem('QrData', data.text);
      navigate('/WS_Scan_Results.js');
      QrReader.deactivate()
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
    <div className="WSScan" style={{ width: '50%', height: 'auto' }}>
      <QrReader
        delay={300}
        onResult={handleScan}
      />



      {QrData !== null && (

        <div>
        <p>QR Code Data:</p>
        <p>{QrData}</p>
        </div>
      )}
    </div>
  );
}

export default Ws_Scan;