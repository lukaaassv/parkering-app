import DayCard from "./DayCard.jsx";
import "./WeekDays.css"

function WeekDays({ startDate = new Date(), side}) {
  return (
    <div className="weekdays">
      <h3 className="info-weekdays">7 dagars schema för {side} husnummer:</h3>
      {Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        return <DayCard key={i} date={date} side={side}/>;
      })}
    </div>
  );
}

export default WeekDays;