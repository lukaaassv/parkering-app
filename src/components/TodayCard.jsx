import { parkingTimeLeftAsString, getCurrentTimeAsString } from "../utils/date_logic";

function TodayCard({day}){
    return <div className = "day-card">
        <div className="day_of_week">
              <h3>Idag är det {day.weekday}</h3>
        </div>
        <div className="date">
             <h3>Den: {day.date} {day.month}</h3>
        </div>
        <div className="time"> 
             <h3>Klockan: {day.time}</h3>
        </div>
        <div className="info_today">
        <p> Idag får du parkera på jämna/ojämna husnummer i {day.timeLeft} till!</p>
        </div>
    </div>


} export default TodayCard