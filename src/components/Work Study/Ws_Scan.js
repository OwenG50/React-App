import React from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';

function Ws_Scan() {
  const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
    }
  }

  const handleError = err => {
    console.error(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default Ws_Scan;