import '../Work Study/styles/WSHome.css'

function WsHomeComponent(){

    return(
        <div className="WSHome">
            <button className="button">Search Library</button>
            <button className="button">Inventory</button>
            <button className="button">Reservations</button>
            <button className="button">Check In / Out</button>
        </div>
    )

}

export default WsHomeComponent;