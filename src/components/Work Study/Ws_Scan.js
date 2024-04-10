import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import '../Work Study/styles/WS_Scan.css'
import { useNavigate } from 'react-router-dom';


function Ws_Scan() {
    const [QrData, setQrData] = useState(null);
    const [bookUID, setBookUID] = useState('');
    const navigate = useNavigate();

    const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
      setQrData(data.text);
      navigate('/WS_Scan_Reslts.js');
      QrReader.reactivate()


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
    <div className="WSScan" style={{ width: '50%', height: 'auto' }}>
      <QrReader
        delay={300}
        onResult={handleScan}
      />
      
      {QrData !== null && (

        <div>
        <p>QR Code Data:</p>
        <p>{QrData}</p>
        <button onClick={resetScanner}>Scan Again</button>
        </div>
      )}
    </div>
  );
}

export default Ws_Scan;