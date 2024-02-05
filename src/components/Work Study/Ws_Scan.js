import React from "react";
import Webcam from "react-webcam";


function Ws_Scan(){

    return(
        <div>
            <Webcam height={600} width={600}/>
            <button onClick={Webcam.openCamera}> Open Camera</button>
            <button onClick={Webcam.closeCamera}> Stop Camera</button>
        </div>
    )

}

export default Ws_Scan;