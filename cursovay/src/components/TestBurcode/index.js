import React, { useState } from 'react'
import BarcodeReader from 'react-barcode-reader';
 
const TestBar = () => {
    const [data, setData] = useState('No result');
 
    return(
      <div>
           <BarcodeReader
        onScan={(result) => {
            setData(result?.text);
        }}
        onError={(error) => {
            setData(error);
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
    )
  }

export default TestBar;

