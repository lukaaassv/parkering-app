import { parkingTimeLeftAsString, getCurrentTimeAsString } from "../utils/date_logic";
import { getForbiddenSide} from "../utils/parking_logic.jsx";

function TodayCard({day, time, side}){
    return <div className = "day-card">
        <div className="day_of_week">
              <h3>Idag är det {day.weekday} den: {day.date} {day.month}</h3>
        </div>
        <div className="time"> 
             <h3>Klockan är just nu: {time.currentTime}</h3>
        </div>
        <div className="info_today">
        <p> Idag får du parkera på {side.allowed} husnummer i {time.timeLeft} till, sedan måste du flytta bilen till {side.forbidden} husnummer! </p>
        </div>
    </div>


} export default TodayCard