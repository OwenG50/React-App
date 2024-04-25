import Ws_Scan from "./Ws_Scan";


// Can be refactored to just call Ws_Scan rather than WS_CheckIn which renders Ws_Scan Component
export function WS_CheckIn(){
    return(
        <div>
            <Ws_Scan></Ws_Scan>
        </div>
    );
}