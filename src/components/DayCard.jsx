import "./DayCard.css"
import { getAllowedSide } from "../utils/parking_logic"

function DayCard({date, side}){
    return (<div className = "day-card-container">
        <h3>{date.toLocaleDateString("sv-SE")}</h3>
    <div className = "day-card">
        <div
        className = "bar" 
        style={{
          width: "70%",
          backgroundColor: getAllowedSide(date) === side ? "#3fa67a" : "#c04a4a"}}
        ></div>
    </div>
    <p>17:00</p>
    </div>
    )


}

export default DayCard