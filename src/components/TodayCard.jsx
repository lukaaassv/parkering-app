import {isWithinParkingTime } from "../utils/date_logic";
import "./TodayCard.css";



function TodayCard({day, time, side}){
    return <div className = "today-card">
        <div className = "day-and-time">
        <div className="day_of_week">
              <h3>{day.weekday} den {day.dateOfMonth} {day.month}</h3>
        </div>
        <div className="time"> 
             <h3>{time.currentTimeAsString}</h3>
        </div>
        </div>
        <div className="info_today">
        {isWithinParkingTime(day.date) ? (
            <p> Idag får du parkera på <strong>{side.allowed} </strong> husnummer i <strong>{time.timeLeft} </strong>till, sedan måste du flytta bilen till <strong>{side.forbidden}</strong> husnummer! </p>
        ) : (
            <p> Idag får du parkera på båda sidorna i <strong>{time.timeLeft}</strong> till, sedan måste du flytta bilen till <strong>{side.forbidden}</strong> husnummer!</p>
        )}
        </div>
    </div>


} export default TodayCard